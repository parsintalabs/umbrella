import React from 'react';

export default function InputFile({ onChange, accept = '.jpg, .png, .jpeg' }) {
    return (
        <input
            accept={accept}
            onChange={onChange}
            type="file"
            className="file:bg-gray-200 file:hover:bg-gray-300 file:transition file:duration-200  file:mr-3 file:text-black file:text-sm file:font-medium file:px-2 file:py-2 file:rounded-lg file:border-0"
        />
    );
}
