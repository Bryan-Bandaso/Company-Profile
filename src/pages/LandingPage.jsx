import React from 'react';
import Button from '../components/Button';

function LandingPage() {
  return (
    <div className="container bg-red-500 h-screen flex justify-center items-center">
      <p className="text-[#a87070] text-[300px] font-bold ">2024</p>
      <div className="">
        <h1 className="text-white text-4xl font-bold z-10 pb-2">ZEON</h1>
        <div className="border-b-2 border-white w-full mb-5"></div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default LandingPage;
