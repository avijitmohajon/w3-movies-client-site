import React from "react";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  const sponsors = [
    {
      name: "CineFlix",
      logo: "https://i.ibb.co.com/0jXYFsQG/logo1.jpg", // Updated logo URL
      description: "Unlimited movies & TV shows anytime.",
      website: "https://www.cineflix.com",
    },
    {
      name: "StreamX",
      logo: "https://i.ibb.co.com/jk74n5cs/logo2.jpg",
      description: "Your favorite content, anytime, anywhere.",
      website: "https://www.streamx.com",
    },
    {
      name: "Epic Films",
      logo: "https://i.ibb.co.com/7xy5ytwk/logo3.jpg",
      description: "Bringing cinematic magic to life.",
      website: "https://www.epicfilms.com",
    },
    {
      name: "Starlight Theaters",
      logo: "https://i.ibb.co.com/Kpfg5r81/logo4.jpg",
      description: "Big screens, bigger dreams.",
      website: "https://www.starlighttheaters.com",
    },
    {
      name: "MediaNext",
      logo: "https://i.ibb.co.com/yFW9hpZY/logo5.jpg",
      description: "Innovating digital entertainment.",
      website: "https://www.medianext.com",
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-2xl lg:text-5xl font-bold my-4 md:my-10 lg:my-16 text-center bg-[#9ad4de] text-base-200 lg:py-5">
        Sponsors Companies
      </h2>
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-[#67d0d2] shadow-lg rounded-2xl p-5 flex flex-col items-center text-center space-y-4 text-black mx-4 md:mx-6 lg:mx-8"
          >
            {/* Sponsor Logo */}
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center overflow-hidden border border-black">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Sponsor Name */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">{sponsor.name}</h3>

            {/* Sponsor Description */}
            <p className="text-sm md:text-base lg:text-lg">{sponsor.description}</p>

            {/* Visit Sponsor Button */}
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black text-white py-2 px-4 rounded-lg transition md:py-3 md:px-6 lg:py-3 lg:px-8"
            >
              Visit website
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;
