import Link from "next/link";
import React from "react";
import CartComponent from "./CartComponent";
import SVG from "./shared/SVG";

const NavBar = () => {
  return (
    <nav className=" fixed bg-blue-950 shadow-md z-10 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-2xl text-yellow-500 pl-10">
          ITI Port Said
        </h1>
        <div className="flex gap-5 mr-13  ">
          <ul className="flex space-x-6 text-gray-700 font-medium items-center">
            <li className="text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/ToDo"}>ToDo</Link>
            </li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/Signin"}>Sign In</Link>
            </li>
            <li className=" text-white hover:text-blue-500 cursor-pointer">
              <Link href={"/Signup"}>Sign Up</Link>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1 relative">
            <li className="relative">
              <CartComponent />
              <SVG />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
