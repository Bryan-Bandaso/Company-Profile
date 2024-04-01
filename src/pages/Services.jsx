import React from 'react';
import Card from '../components/Card';

const ServicesPage = () => {
  const cards = [
    {
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
      button: 'View Trips',
      imageUrl: '../src/assets/img/services.png',
    },
    {
      title: 'To The Beach',
      copy: 'Plan your next beach trip with these fabulous destinations',
      button: 'View Trips',
      imageUrl: '../src/assets/img/services.png',
    },
    {
      title: 'Desert Destinations',
      copy: "It's the desert you've always dreamed of",
      button: 'Book Now',
      imageUrl: '../src/assets/img/services.png',
    },
    {
      title: 'Explore The Galaxy',
      copy: 'Seriously, straight up, just blast off into outer space today',
      button: 'Book Now',
      imageUrl: '../src/assets/img/services.png',
    },
  ];

  return (
    <>
      <div>
        <div className="bg-red-500 w-16 h-screen absolute top-0 left-0"></div>
        {/* card */}
        <div className="flex flex-row w-full gap-5 justify-center items-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              copy={card.copy}
              button={card.button}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
        {/* End Card */}
        <div className="flex flex-row justify-center items-center w-full pt-10">
          <h1 className="text-6xl font-bold">Services</h1>
          <p className="w-1/2 pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quidem, fugiat quia voluptates possimus dolores! Mollitia magnam quo
            ducimus incidunt.
          </p>
        </div>
        <div className="bg-red-500 w-16 h-screen absolute top-0 right-0"></div>
      </div>
    </>
  );
};

export default ServicesPage;
