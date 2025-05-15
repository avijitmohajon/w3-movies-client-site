import React, { useState, useEffect } from "react";

const NewRelease = () => {
  const videoID = "3x77q40hATw";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-8 lg:px-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Glowing title with animation */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4 animate-pulse">
          NEW MOVIE
        </h2>
        <p className="text-lg text-gray-300">Be the first to witness the cinematic masterpiece</p>
      </div>

      {/* Interactive trailer card */}
      <div 
        className={`max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${isPlaying ? "ring-4 ring-yellow-400" : "ring-1 ring-gray-700"}`}
        onClick={togglePlay}
      >
        {/* Play button overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer">
            <div className="w-24 h-24 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-white animate-ping-slow" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}

        {/* Responsive iframe with aspect ratio */}
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src='http://ftp.ctgfun.com/Indian/Hindi%20Movies/Ground%20Zero%20%282025%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/Ground%20Zero%20%282025%29%20Hindi%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D.mp4'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="New Movie Trailer"
          />
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-lg animate-gradient-xy"></div>
        </div>
      </div>

      {/* Call-to-action section */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1">
          Get Tickets Now
        </button>
        <p className="mt-4 text-gray-400">Coming to theaters December 15, 2023</p>
      </div>

      {/* Add some custom animation styles in your global CSS */}
      <style jsx global>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 8s ease infinite;
          background-size: 400% 400%;
        }
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NewRelease;