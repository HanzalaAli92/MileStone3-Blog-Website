import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bgSlideShow">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-700 to-purple-600 opacity-90"></div>

      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10 text-center px-6">
        <div className="text-white space-y-8">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Discover Your Next Favorite Blog
          </h1>

          <p className="text-lg font-medium max-w-2xl mx-auto mb-6">
            Dive into a world of creative insights, engaging stories, and helpful tips to fuel your passion for blogging.
          </p>

          <div className="mt-4">
            <a
              href="/blogs"
              className="bg-indigo-300 text-indigo-900 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-white hover:text-indigo-800 transition duration-300"
            >
              Explore Our Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
