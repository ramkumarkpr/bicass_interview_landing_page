import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FirstTemplate from "./Components/FirstTemplate";
import SecondTemplate from "./Components/SecondTemplate";
import ThirdTemplate from "./Components/ThirdTemplate";
import FourthTemplate from "./Components/FourthTemplate";
import FifthTemplate from "./Components/FifthTemplate";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <>
      <section>
        <div>{<Navbar />}</div>
      </section>

      <section>
        <div>{<FirstTemplate />}</div>
      </section>

      <section>
        <div> {<SecondTemplate />} </div>
      </section>

      <section>
        <div>{<ThirdTemplate />}</div>
      </section>

      <section>
        <div>{<FourthTemplate />}</div>
      </section>

      <section className=" bg-black text-white">
        <div> {<FifthTemplate />} </div>
      </section>

      <section className="bg-black text-white">
        <div>{<Copyright />}</div>
      </section>
    </>
  );
}

export default App;
