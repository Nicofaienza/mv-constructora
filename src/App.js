import "./App.css";

import FlorisbeloIntro from "./components/FlorisbeloIntro/FlorisbeloIntro.js";
import Banner1 from "./components/Banner1/Banner1";
import AvellanedaIntro from "./components/AvellanedaIntro/AvellanedaIntro";
import Banner2 from "./components/Banner2/Banner2";
import * as React from "react";

import Sponsors from "./components/sponsors/Sponsors";

const App = ({ Link }) => {
  return (
    <>
      <AvellanedaIntro Link={Link} />
      <Banner1 Link={Link} />
      <FlorisbeloIntro Link={Link} />
      <Banner2 />
      <Sponsors />
    </>
  );
};

export default App;
