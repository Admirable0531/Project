"use client"
import { ReactTyped } from "react-typed";

const Main = () => {
    return (
      <section className="font-bold text-gray-200 rounded-3xl h-[90%] w-screen circle p-10 mx-10 flex">
        <p>You can call me</p>
        <ReactTyped className="pl-1.5" strings={["Azu", "Admirable", "Ryan"]} typeSpeed={40} backSpeed={50} loop/>

      </section>
    );
  };
  
  export default Main;