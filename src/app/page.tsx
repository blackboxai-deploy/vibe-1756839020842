"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div
        className={`text-center space-y-8 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your Next.js application
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Info Card */}
        <div className="max-w-md mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎉 Success!
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your Next.js application is running successfully. This page is built with Tailwind CSS and features responsive design, smooth animations, and modern styling.
          </p>
        </div>

        {/* Technical Details */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>Built with Next.js 13+ App Router</p>
          <p>Styled with Tailwind CSS</p>
          <p>TypeScript enabled</p>
        </div>
      </div>
    </main>
  );
}