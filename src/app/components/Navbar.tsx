"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Back Arrow */}
          {/* <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-blue-600 dark:text-white">
              <Image
                src="/image/logo11.png" // Path is relative to the "public" folder
                alt="Logo"
                width={150}
                height={150}
              />
            </span>
          </div> */}

          <div className="flex items-center space-x-1">
            {/* Logo Image */}
            <Image
              src="/image/logo.png" // Path is relative to the "public" folder
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10" // You can adjust the size as needed
            />
            {/* Logo Text */}
            <span className="text-[#0B1437] text-3xl font-semibold leading-none dark:text-white">
              SoftSell
            </span>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-2xl text-gray-800 dark:text-gray-200 flex items-center gap-1"
              aria-label="Toggle Dark Mode"
            >
              {mounted && (theme === "dark" ? <MdLightMode /> : <MdDarkMode />)}{" "}
              | <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
