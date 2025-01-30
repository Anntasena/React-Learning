/** @type {import('tailwindcss').Config} */
// //= jika ingin mematikan eslint
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //= DEFAULT FONT => jika ingin merubah default font
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      //= EXTENDED COLOR => jika ingin menambahkan warna
      colors: {
        pizza: "#123451",
      },
      //= EXTENDED HEIGHT => merubah default satuan height
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
