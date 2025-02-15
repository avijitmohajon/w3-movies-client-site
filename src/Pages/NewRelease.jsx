import React from "react";

const NewRelease = () => {
  const videoID = "3x77q40hATw"; 

  return (
    <div className="h-full p-10">
      <h2 className="text-2xl font-bold mb-8 text-center ">New Movie Trailer</h2>
      <div className="card p-4 border rounded-lg shadow-md">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="New Movie Trailer"
        ></iframe>
      </div>
    </div>
  );
};

export default NewRelease;
