import React from 'react';

const VisionPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <img src="../src/assets/img/building.jpg" alt="" width={367} />
        <div className="flex flex-col pl-10 w-[700px] pt-10 items-end">
          <h1 className="text-5xl font-bold text-gray-600">Our Vision</h1>
          <p className="pt-8 flex mb-10 text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            repudiandae, nam commodi consectetur praesentium a laudantium
            temporibus ex illo blanditiis nihil adipisci rem asperiores odit,
            optio numquam et consequuntur eligendi?
          </p>
          <div className="flex flex-row gap-10">
            <div className="w-[200px] flex flex-col justify-center items-center">
              <img
                src="../src/assets/img/star.png"
                alt=""
                width={100}
                className="py-3 px-5 mb-4"
                style={{ boxShadow: '5px 10px 18px #888888' }}
              />
              <p className="text-xl font-bold mb-2">Vision One</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quae?
              </p>
            </div>
            <div className="w-[200px] flex flex-col justify-center items-center">
              <img
                src="../src/assets/img/bag.png"
                alt=""
                width={100}
                className="py-3 px-5 mb-4"
                style={{ boxShadow: '5px 10px 18px #888888' }}
              />
              <p className="text-xl font-bold mb-2">Vision Two</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quae?
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-24 h-screen absolute right-0"></div>
      </div>
    </>
  );
};

export default VisionPage;
