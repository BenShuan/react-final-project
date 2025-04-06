import React, { useState } from 'react';
import { cn } from '../../utils/tailwind';

const Checkbox = ({ label, type, id, name, className,defaultValue, ...props }) => {
  const [val, setVal] = useState(defaultValue || false)
  return (
    <div className={cn("flex flex-col mb-2", className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        value={val}
        onChange={e => setVal(e.target.checked)}
        checked={val}
        className="border border-gray-300 rounded-md p-2 h-full"
        type={type}
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Checkbox;
