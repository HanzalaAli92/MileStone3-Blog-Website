'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white fixed top-0 left-0 right-0 z-20 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">TechnoMind Blog</h1>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Blogs', path: '/blogs' },
            { name: 'Contact', path: '/contact' },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="hover:text-purple-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/create"
            className="bg-purple-300 text-purple-900 px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-purple-800 transition duration-300"
          >
            Create Blog
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-purple-700 hover:bg-purple-600 transition duration-300"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-purple-700 py-4 px-6 space-y-4 text-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Blogs', path: '/blogs' },
            { name: 'Contact', path: '/contact' },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="block text-white text-lg font-medium hover:text-purple-300 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

// import Link from 'next/link';
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white fixed top-0 left-0 right-0 z-20 shadow-lg">
//       <div className="container mx-auto flex items-center justify-between py-4 px-8">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <h1 className="text-2xl font-bold">TechnoMind Blog</h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-lg font-medium">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'About', path: '/about' },
//             { name: 'Blogs', path: '/blogs' },
//             { name: 'Contact', path: '/contact' },
//           ].map((link, idx) => (
//             <Link
//               key={idx}
//               href={link.path}
//               className="hover:text-purple-300 relative group"
//             >
//               {link.name}
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/create"
//             className="bg-purple-300 text-purple-900 px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-purple-800 transition duration-300"
//           >
//             Create Blog
//           </Link>

//           {/* Mobile Menu */}
//           <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-purple-700 hover:bg-purple-600 transition duration-300">
//             <span className="block w-6 h-[2px] bg-white mb-1"></span>
//             <span className="block w-6 h-[2px] bg-white mb-1"></span>
//             <span className="block w-6 h-[2px] bg-white"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <nav className="md:hidden bg-purple-700 py-4 px-6 space-y-4 text-center">
//         {[
//           { name: 'Home', path: '/' },
//           { name: 'About', path: '/about' },
//           { name: 'Blogs', path: '/blogs' },
//           { name: 'Contact', path: '/contact' },
//         ].map((link, idx) => (
//           <Link
//             key={idx}
//             href={link.path}
//             className="block text-white text-lg font-medium hover:text-purple-300 transition duration-300"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// };

// export default Header;