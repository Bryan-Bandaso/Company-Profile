import React from 'react';
import '../style.css';

const MissionPage = () => {
  return (
    <div className="mission-page">
      <div className="flex flex-col justify-center items-center px-12 py-14">
        <h1 className="text-5xl font-bold text-white mb-9">Our Mission</h1>
        <p className="text-white mb-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint,
          voluptatum cum alias aperiam architecto magni aspernatur voluptates
          necessitatibus saepe reiciendis veritatis at, cumque fugit dolores
          distinctio adipisci commodi assumenda?
        </p>
        <div className="flex flex-row justify-center items-center gap-14">
          <div className="flex flex-col justify-center items-center w-3/12">
            <img
              src="../src/assets/img/people.png"
              alt=""
              width={120}
              className="bg-gray-400 px-6 py-4 rounded-md mb-3"
            />
            <p className="text-xl text-white font-bold mb-2">Mission One</p>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              maiores sapiente quae assumenda earum minus.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-3/12">
            <img
              src="../src/assets/img/hospital.png"
              alt=""
              width={120}
              className="bg-gray-400 px-6 py-4 rounded-md mb-3"
            />
            <p className="text-xl text-white font-bold mb-2">Mission Two</p>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              maiores sapiente quae assumenda earum minus.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-3/12">
            <img
              src="../src/assets/img/home.png"
              alt=""
              width={120}
              className="bg-gray-400 px-6 py-4 rounded-md mb-3"
            />
            <p className="text-xl text-white font-bold mb-2">Mission Three</p>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              maiores sapiente quae assumenda earum minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
