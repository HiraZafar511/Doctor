// import React from "react";
 import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
// import store from "../store/configerStore";
import store from "../store/configerStore"

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>;
}

export default MyApp;
