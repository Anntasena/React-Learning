import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtecedRoute from "./pages/ProtecedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// # WITHOUT SPLITING CODE
// dist/assets/index-2c7c1d16.css   30.23 kB │ gzip:   5.06 kB
// dist/assets/index-3d18990b.js   512.11 kB │ gzip: 151.52 kB

// ? WITH  SPLITING CODE
// dist/assets/index-07ca348c.css           26.56 kB │ gzip:   4.38 kB
// dist/assets/Product.module-8d683417.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-21d452aa.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-922c9f92.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-ee4148af.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-62aae28b.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-75618c75.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-3114f3c6.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-0ac26cc1.js             1.02 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-c812fb1b.js       159.91 kB │ gzip:  48.95 kB
// dist/assets/index-93d67e98.js           350.64 kB │ gzip: 102.09 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtecedRoute>
                    <AppLayout />
                  </ProtecedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
export default App;
