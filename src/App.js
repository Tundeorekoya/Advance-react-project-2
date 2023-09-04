import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Featurres,
  WhatGPT3,
  Header,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Featurres />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
