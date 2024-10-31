"use client";
import { useState } from "react";
import LoginComponents from "../components/ResturentLogin";
import RegisterComponents from "../components/ResturentRegister";
import ResturentHeader from "../components/ResturentHeader";
import ResturentFooter from "../components/ResturentFooter";

const page = () => {
  const [login, setlogin] = useState(true);
  return (
    <>
    <div className=" flex flex-col items-center w-full ">
      <ResturentHeader/>
      <h2 className="text-6xl font-semibold ">You are welcome</h2>

      {login ? <LoginComponents /> : <RegisterComponents />}

      <button onClick={() => setlogin(!login)} className=" w-[300px] h-[40px] border-2 rounded-lg text-red-500 mt-3 ">
        {login ? "Don't have Account?" : "Already have account"}
      </button>
    </div>
    <ResturentFooter />
    </>
  );
};

export default page;
