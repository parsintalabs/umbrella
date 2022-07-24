import React from 'react';

export default function Error({ value, children }) {
    return (
        <div className="text-rose-500 font-medium mt-2">
            {value ? value : children}
        </div>
    );
}
