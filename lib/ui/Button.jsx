import React from 'react';
import { cn } from '../../utils/tailwind';

const Button = ({ children,className, ...props }) => {
  return (
    <button
      className={cn("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
