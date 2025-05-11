"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null  // avoid SSR mismatch

  return (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors pt-10">
      {/* Dark Mode Toggle */}
     

      <div className="container mx-auto px-10 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Sell Your Software Licenses with Ease
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            Convert your unused software licenses into cash quickly and effortlessly.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            Sell My Licenses
          </button>
        </div>

        {/* Right Column (Icon Card) */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center">
            {/* SVG Upload Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M16 8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <p className="mt-4 text-gray-900 dark:text-white font-medium">
              Upload License
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
