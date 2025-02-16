"use client";

import Link from "next/link";
import React from "react";
export interface IData {
  id: number;
  title: string;
  image?: string | null;
  description: string;
  author: string;
}

// blogs data
export const blogs: IData[] = [
  {
    id: 1,
    title: "The Evolution of Electric Vehicles",
    author: "Emma Green",
    description:
      "Electric vehicles are reshaping the automotive industry with their eco-friendly features and technological advancements. Here's a look at their journey and future potential.",
    image: "/blog1-EE.webp",
  },
  {
    id: 2,
    title: "Mastering the Art of Cooking",
    author: "Liam White",
    description:
      "Cooking is both an art and a science. Explore techniques, recipes, and tips to elevate your culinary skills to the next level.",
    image: "/blog2-MA.jpeg",
  },
  {
    id: 3,
    title: "The Impact of Climate Change",
    author: "Sophia Black",
    description:
      "Climate change is one of the most pressing issues of our time. Understanding its effects and what we can do to mitigate them is crucial.",
    image: "/blog3-CC.jpeg",
  },
  {
    id: 4,
    title: "Advances in Renewable Energy",
    author: "William King",
    description:
      "Renewable energy technologies are revolutionizing the way we produce and consume power, offering sustainable solutions for the future.",
    image: "/blog4-RE.jpeg",
  },
  {
    id: 5,
    title: "The Role of Blockchain in Modern Technology",
    author: "Olivia Knight",
    description:
      "Blockchain technology is more than just cryptocurrencies. Discover its applications in various industries and its potential to transform the digital world.",
    image: "/blog5-RB.jpg",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    author: "James Wilson",
    description:
      "AI is revolutionizing healthcare by improving diagnostics, personalizing treatments, and enhancing patient care. Dive into its impact on the medical field.",
    image: "/blog6-IH.jpeg",
  },
  {
    id: 7,
    title: "The Rise of Artificial Intelligence",
    author: "Salina Smith",
    description:
      "Artificial Intelligence (AI) has come a long way from being a concept in science fiction to becoming an integral part of our daily lives",
    image: "/blog7-AI.jpg",
  },
  {
    id: 8,
    title: "5 Must-Have Apps for Productivity in 2024",
    author: "John Smith",
    description:
      "Staying productive in today's fast-paced world can be challenging, but the right tools can make all the difference. With countless apps available, finding the ones that truly enhance productivity is essential.",
    image: "/blog8-Apps.jpg",
  },
  {
    id: 9,
    title: "The Future of Quantum Computing",
    author: "Julis Brown",
    description:
      "Quantum computing, once a theoretical concept confined to academic research, has now become one of the most exciting and transformative fields of technology.",
    image: "/blog9-FC.jpg",
  },
  {
    id: 10,
    title: "Breaking Barriers in Space Exploration",
    author: "Ava Brown",
    description:
      "Space exploration has entered a new era of innovation and discovery, breaking barriers and expanding our understanding of the universe.",
    image: "/blog10-BB.jpeg",
  },
  {
    id: 11,
    title: "The Secrets of Financial Independence",
    author: "Mason Davis",
    description:
      "Achieving financial independence requires discipline, planning, and knowledge. Discover the strategies to build wealth and secure your future.",
    image: "/blog11-SF.jpg",
  },
  {
    id: 12,
    title: "The Psychology of Happiness",
    author: "Isabella Moore",
    description:
      "Happiness is a complex emotion influenced by various factors. Explore the psychology behind it and how to cultivate joy in your life.",
    image: "/blog12-PH.jpeg",
  },
  {
    id: 13,
    title: "The Power of Mindfulness",
    author: "Gabriel Cruise",
    description:
      "In today's fast-paced world, where distractions abound and stress levels are ever-increasing, mindfulness has emerged as a powerful tool to bring calm, focus, and balance to our lives",
    image: "/blog13-Mind.jpg",
  },
  {
    id: 14,
    title: "Plant-Based Diets",
    author: "Alizabeth Raef",
    description:
      "Plant-based diets offer a wealth of health benefits and contribute to a more sustainable future. By incorporating more plant-based foods into your diet, you can improve your well-being.",
    image: "/blog14-Plant.jpg",
  },
  {
    id: 15,
    title: "Exercises for a Healthier Lifestyle",
    author: "Sam Doe",
    description:
      "Exercise is a cornerstone of a healthy lifestyle. It helps improve physical health, boosts mental well-being, and contributes to a long, fulfilling life.",
    image: "/blog15-Health.jpg",
  },
];

const BlogsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-gradient-to-b from-indigo-50 to-indigo-100">
      <h2 className="text-5xl font-semibold text-center text-indigo-800 mb-8 mt-10 sm:mt-8">
      TechnoMind Blogs
      </h2>
      <p className="text-lg max-w-3xl text-center text-indigo-600 px-4 mb-12">
        This space is dedicated to sharing insightful articles, inspiring
        stories, and valuable tips across a wide range of topics. Whether you're
        here to learn, explore, or simply enjoy a good read, our blog has
        something for everyone.
      </p>

      <section className="container mx-auto">
        <div className="flex justify-center mb-12">
          <ul className="flex space-x-8 text-lg font-medium text-indigo-700">
            <li className="hover:text-indigo-900 cursor-pointer transition-colors duration-200">
              Fitness
            </li>
            <li className="hover:text-indigo-900 cursor-pointer transition-colors duration-200">
              Health
            </li>
            <li className="hover:text-indigo-900 cursor-pointer transition-colors duration-200">
              Arts
            </li>
            <li className="hover:text-indigo-900 cursor-pointer transition-colors duration-200">
              Technology
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group relative bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-56">
                <img
                  className="w-full h-full object-cover object-center transition-all duration-300 group-hover:opacity-80"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="absolute inset-0 bg-indigo-500 opacity-25 transition-all duration-300 group-hover:opacity-30"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-2 leading-tight hover:text-indigo-700 transition-all duration-200">
                  {blog.title}
                </h2>
                <h3 className="text-md font-medium text-indigo-600 mb-4">{blog.author}</h3>
                <p className="text-gray-500 leading-relaxed line-clamp-3 mb-6">{blog.description}</p>

                {/* Read More Button */}
                <div className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-lg font-semibold transition-all duration-200">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transition-all duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/create"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-600 transition-all duration-300"
          >
            Create Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;


