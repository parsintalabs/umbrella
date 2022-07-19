import clsx from 'clsx';
import React from 'react';

function Header({ className = '', children }) {
    return (
        <div
            className={clsx(
                className,
                '-mt-8 mb-8 grid grid-cols-12 bg-gray-800 py-5 lg:py-32'
            )}
        >
            <div className="col-span-10 col-start-2">
                <div className="max-w-4xl">{children}</div>
            </div>
        </div>
    );
}
function Title({ children }) {
    return (
        <h1 className="text-2xl font-bold text-white lg:text-8xl">
            {children}
        </h1>
    );
}
function Subtitle({ children }) {
    return (
        <h4 className="mt-1 text-xl font-medium text-gray-300 lg:text-3xl">
            {children}
        </h4>
    );
}
function Content({ children }) {
    return (
        <div className="mt-4 leading-relaxed text-gray-400 lg:text-xl">
            {children}
        </div>
    );
}

Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Content = Content;

export default Header;
