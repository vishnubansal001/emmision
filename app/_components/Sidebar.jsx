"use client";

import { useRouter } from "next/navigation";
import React from "react";

const tabs = [
  { img: "dash.svg", link: "/", name: "Contact" },
  { img: "e.svg", link: "/", name: "Contact" },
  { img: "f.svg", link: "/", name: "Contact" },
  { img: "c.svg", link: "/", name: "Services" },
  { img: "b.svg", link: "/", name: "About" },
  { img: "a.svg", link: "/", name: "Home" },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white py-5 px-4 border-r-2 border-[#777777] fixed flex-col justify-between gap-5 top-0 left-0 z-90">
      <div className="flex items-center justify-center lg:flex-row flex-col">
        <img src="/logo1.png" alt="logo" />
      </div>
      <div className="mt-10 w-full flex flex-col items-center justify-center gap-6">
        {tabs.map((tab, index) => (
          <div key={index}>
            <img
              src={tab.img}
              alt={tab.name}
              onCLick={() => router.push(`${tab.link}`)}
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
