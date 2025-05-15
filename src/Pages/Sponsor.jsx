import React from "react";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  const sponsors = [
    {
      name: "CineFlix",
      logo: "https://i.ibb.co.com/0jXYFsQG/logo1.jpg",
      description: "Unlimited movies & TV shows anytime.",
      website: "https://www.cineflix.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "StreamX",
      logo: "https://i.ibb.co.com/jk74n5cs/logo2.jpg",
      description: "Your favorite content, anytime, anywhere.",
      website: "https://www.streamx.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Epic Films",
      logo: "https://i.ibb.co.com/7xy5ytwk/logo3.jpg",
      description: "Bringing cinematic magic to life.",
      website: "https://www.epicfilms.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Starlight Theaters",
      logo: "https://i.ibb.co.com/Kpfg5r81/logo4.jpg",
      description: "Big screens, bigger dreams.",
      website: "https://www.starlighttheaters.com",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "MediaNext",
      logo: "https://i.ibb.co.com/yFW9hpZY/logo5.jpg",
      description: "Innovating digital entertainment.",
      website: "https://www.medianext.com",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 bg-base-300">
      <div className="max-w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-300 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-600">Valued Sponsors</span>
          </h2>
          <p className="text-base-content max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            These industry leaders help bring amazing content to you
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          {/* Marquee */}
          <Marquee 
            pauseOnHover={true} 
            gradient={false} 
            speed={40}
            className="py-4"
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`group relative bg-gray-800 hover:bg-gradient-to-br ${sponsor.color} shadow-xl rounded-xl p-6 flex flex-col items-center text-center space-y-4 mx-3 sm:mx-4 md:mx-5 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent"></div>
                
                {/* Sponsor Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all duration-300 bg-white p-1">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                {/* Sponsor Info */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white/90 text-xs sm:text-sm md:text-base">
                    {sponsor.description}
                  </p>
                </div>

                {/* Visit Sponsor Button */}
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;