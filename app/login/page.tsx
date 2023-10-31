import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="bg-[#fbf9f9] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-grey-5 w-[500px] h-[500px] relative rounded-md p-8">
        <p className="font-bold text-[#3e3e3e] text-3xl text-center mb-4">
          Welcome
          <br />
          Log into your admin account
        </p>
        <div className="mb-6">
          <label htmlFor="username" className="font-medium text-black text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full h-10 border border-solid border-[#527845] rounded-md pl-2 text-black focus:outline-none"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="font-medium text-black text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full h-10 border border-solid border-[#527845] rounded-md pl-2 text-black focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <Link href="/login">
            <button className="w-full h-10 bg-[#527845] text-white text-lg rounded-md mt-4">
              Log In
            </button>
          </Link>
        </div>
        <p className="text-black text-lg text-center">
          Don’t have an account?{" "}
          <Link href="/registration" className="font-bold text-[#008000]">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
