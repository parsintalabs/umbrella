import React from 'react';

export default function Textarea({ ...props }) {
    return (
        <textarea
            className="w-full focus:outline-none rounded-lg border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-200"
            {...props}
        />
    );
}
