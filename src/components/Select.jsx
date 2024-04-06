import React, { useId, useState } from 'react';

function Select({ options, label, className = '', ...props }, ref) {
    const [id] = useId();

    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
            <select 
                id={id} 
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props} 
            >
                {options?.map((option, index) => (
                    <option 
                        key={index} 
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);
