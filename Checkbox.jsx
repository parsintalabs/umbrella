import clsx from 'clsx';
import React from 'react';

export default function Checkbox({ className, label, ...props }) {
    return (
        <label className={clsx('flex items-center gap-x-2.5', className)}>
            <input
                {...props}
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0"
            />
            <span className="select-none text-gray-600">{label}</span>
        </label>
    );
}
