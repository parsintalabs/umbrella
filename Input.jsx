import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Input({
    type = 'text',
    className,
    isFocused,
    ...props
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={clsx(
                className,
                'rounded-lg border border-gray-300 py-2 px-3 transition duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100'
            )}
            ref={input}
        />
    );
}
