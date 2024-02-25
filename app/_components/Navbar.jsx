"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LuHome } from "react-icons/lu";
import { MdMenuOpen } from "react-icons/md";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="fixed top-0 w-full flex flex-row justify-between items-center sm:pl-28 pl-10 lg:pr-20 pr-10 bg-[#1c1c1c]">
        <div className="flex flex-row justify-center items-center gap-3">
          <LuHome className="text-[#41DFE2] text-2xl font-semibold" />
          <p className="sm:flex hidden md:text-lg text-base text-white select-none">
            Country Trail Analysis
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 select-none text-white cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="sm:hidden flex" onClick={() => toggleSidebar()}>
            <MdMenuOpen className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden">
        <Sidebar />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        className="z-90"
      >
        <Sidebar />
      </motion.div>
    </>
  );
};

export default Navbar;
