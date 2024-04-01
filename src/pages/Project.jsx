import React from 'react';

const ProjectPage = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 p-12">
        {/* Section 1 */}
        <div className="flex flex-col pt-7">
          <h1 className="text-5xl font-bold mb-6">Our Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi
            dolorum a. Magni dolore consectetur nemo, accusamus magnam autem,
            vitae sequi eum molestias corporis dignissimos.
          </p>
        </div>
        <div className="col-start-3">
          <img src="../src/assets/img/road-floor.jpg" alt="" loading="lazy" />
        </div>
        <div className="">
          <img src="../src/assets/img/city-park.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="../src/assets/img/road-floor.jpg" alt="" loading="lazy" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img
            src="../src/assets/img/park-landscape.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-center text-4xl font-bold">First Project</p>
      <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-8 p-12">
        {/* Section 2 */}
        <div className="">
          <img src="../src/assets/img/city-park.jpg" alt="" loading="lazy" />
        </div>
        <div className="">
          <img src="../src/assets/img/city-park.jpg" alt="" loading="lazy" />
        </div>
        <div className="">
          <img src="../src/assets/img/city-park.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
