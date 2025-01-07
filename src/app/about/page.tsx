import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-500 to-purple-500 text-gray-800 py-20">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 mt-10 sm:mt-8">About TechnoMind Blog</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            WeboraBlog is your gateway to creativity, empowering content creators and writers to connect, publish, and grow. 
            Whether you're a budding blogger or a seasoned writer, we're here to support your journey.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
            <p className="text-lg text-gray-200">
              We aim to simplify blogging and make it accessible to all. By providing cutting-edge tools and a 
              supportive community, we help creators unleash their full potential and thrive in the digital space.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/400x300?text=Mission+Image"
              alt="Our Mission"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://via.placeholder.com/400x300?text=Vision+Image"
              alt="Our Vision"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Our Vision</h2>
            <p className="text-lg text-gray-200">
              To become a global leader in content creation, fostering a diverse community of writers who inspire, 
              educate, and connect with audiences worldwide.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { name: "Jane Smith", role: "Co-Founder & CTO", img: "https://via.placeholder.com/150x150?text=Jane" },
              { name: "John Doe", role: "Co-Founder & CEO", img: "https://via.placeholder.com/150x150?text=John" },
              { name: "Emily Johnson", role: "Marketing Manager", img: "https://via.placeholder.com/150x150?text=Emily" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-indigo-700 text-white p-12 rounded-xl shadow-lg text-center">
          <h2 className="text-4xl font-bold mb-4">Join TechnoMind Blog Today</h2>
          <p className="text-lg mb-6">
            Become a part of our growing community and take your content creation to the next level. Let's 
            shape the future of digital storytelling together.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:bg-indigo-50 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;