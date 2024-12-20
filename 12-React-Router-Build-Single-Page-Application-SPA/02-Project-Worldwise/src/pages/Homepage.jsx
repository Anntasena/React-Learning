import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">Worldwise</h1>
      <Link to="/app">app page but not in one file</Link>
    </div>
  );
}

export default Homepage;
