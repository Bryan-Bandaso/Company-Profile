import React from 'react';

const Button = ({ children }) => {
  return (
    <>
      {' '}
      <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-black cursor-pointer text-white w-[200px]">
        {children}
      </button>
    </>
  );
};

export default Button;
