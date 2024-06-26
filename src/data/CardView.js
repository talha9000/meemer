import React from 'react';

const CardView = ({ impath, alt, title, description }) => {
  return (
    <div className="card md:w-80 lg:w-96 h-96 bg-base-100 shadow-xl mx-auto">
      <figure className="h-64 overflow-hidden flex items-center justify-center">
        <img src={impath} alt={alt} className="h-full w-auto" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
        <p className="text-sm md:text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default CardView;
