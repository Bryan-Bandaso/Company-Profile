import React from 'react';

const TeamPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center content-center h-screen">
        <div className="z-10">
          <p className="text-5xl font-bold text-gray-500 text-center mb-6">
            Meet Our Team
          </p>
          <p className="px-10 text-center mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            <br />
            reprehenderit. Dicta commodi et, expedita atque deleniti hic
            delectus consectetur cupiditate.
          </p>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <div className="flex flex-col items-center">
              <img src="../src/assets/img/profile.jpg" alt="" width={250} />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-white">John Doe</p>
                <p className="italic text-white">CEO & Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../src/assets/img/profile.jpg" alt="" width={250} />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-white">John Doe</p>
                <p className="italic text-white">CEO & Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../src/assets/img/profile.jpg" alt="" width={250} />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-white">John Doe</p>
                <p className="italic text-white">CEO & Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="../src/assets/img/profile.jpg" alt="" width={250} />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-white">John Doe</p>
                <p className="italic text-white">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-500 w-full h-60 absolute bottom-0 z-0"></div>
      </div>
    </>
  );
};

export default TeamPage;
