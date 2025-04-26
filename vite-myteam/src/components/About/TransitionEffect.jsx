import React from 'react';

const TransitionEffect = ({ children, show, delay = 0 }) => {
  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${delay ? `delay-${delay}` : ''} ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default TransitionEffect;