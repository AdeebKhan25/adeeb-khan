import React, { useState } from "react";
import Adeeb from "./assets/Adeeb.jpg";

function Home() {
  return (
    <main
      className="flex-grow flex flex-col items-center"
      style={{
        paddingTop:
          window.innerHeight > 1100 ? "clamp(2rem, 10vh, 20vh)" : "0rem",
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{
          width: window.innerHeight > 1100 ? "26rem" : "20rem",
        }}
      >
        <img
          className="rounded-full w-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[45vh] lg:max-h-[50vh] animate-fadeIn"
          src={Adeeb}
          alt="Profile Pic"
        />
      </div>
      <div className="animate-fadeUp text-center mt-4 text-gray-500 font-pPins">
        <span className="text-gray-600 text-lg font-semibold tracking-tight mb-1 inline-block">
          Senior Software Engineer @ Marvell Technology
        </span>{" "}
        <br />
        M.Tech CSE'25 @ MNNIT Allahabad <br />
        B.Tech CSE'22 @ BIET Jhansi <br />
        Backend | Full-Stack | AI/ML <br />
      </div>
    </main>
  );
}

export default Home;
