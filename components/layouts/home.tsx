import React from "react";
import { Space_Grotesk, Sofia_Sans_Condensed } from "next/font/google";

export const sofia = Sofia_Sans_Condensed({
  subsets: ["latin"],
});

export const space = Space_Grotesk({
  subsets: ["latin"],
});


function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center w-full h-[50vh]">
        <div className="relative ml-22 mt-10 w-full h-full">
          <div className="flex gap-1 w-max h-max">
            <div className="h-14 pt-1">
              <div className="w-4 h-4  bg-blue-300 rounded-full"> </div>
            </div>
            <p className="w-32 h-14"> 19:00 WIB SURABAYA, IDN </p>
          </div>
        </div>

        <div className="absolute flex justify-center items-center">
          <h1 className="m-0 tracking-tighter font-extrabold text-[14rem]">
            WEBDEVELOPER
          </h1>
        </div>

        <div className="tracking-[1rem] flex justify-end mt-44 mr-16 relative w-full ">
          <p> UNIVERSITY STUDENT </p>
        </div>
      </div>

      <div className="w-full justify-between px-8 flex items-end absolute bottom-5 font-bold">
        <h1 className="whitespace-pre italic text-2xl">{"{    WEB DESIGN (UI/UX)    }"}</h1>
        <h1 className="whitespace-pre italic text-2xl">{"{    WEB DEVELOPMENT    }"}</h1>
      </div>
    </main>
  );
}

export default Home;
