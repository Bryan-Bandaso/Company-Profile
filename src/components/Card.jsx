import React from 'react';
import '../../src/style.css';

const Card = ({ title, copy, button, imageUrl }) => {
  return (
    <div
      className="card relative overflow-hidden bg-gray-900 text-white rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: '240px',
        height: '400px',
      }}
    >
      <div className="content p-6">
        <h2 className="title text-2xl font-bold">{title}</h2>
        <div className="hover-details hidden">
          <p className="copy text-base font-serif">{copy}</p>
          <button className="btn mt-4 px-6 py-3 bg-black text-white rounded-lg font-bold uppercase hover:bg-gray-800 transition duration-300 ease-in-out">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
