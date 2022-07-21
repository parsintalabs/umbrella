import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx'
import React from 'react';

export default function Pagination({ meta, links }) {
    return (
        <div>
            {meta.links.length > 2 && (
                <>
                    <ul className="flex mt-10 justify-between md:hidden items-center gap-x-0.5">
                        {links.prev ? (
                            <li>
                                <Link
                                    className="rounded border inline-flex p-2"
                                    href={links.prev}
                                >
                                    <LeftIcon />
                                </Link>
                            </li>
                        ) : (
                            <li className="rounded border inline-flex p-2 cursor-none">
                                <LeftIcon />
                            </li>
                        )}
                        {links.next ? (
                            <li>
                                <Link
                                    className="rounded border inline-flex p-2"
                                    href={links.next}
                                >
                                    <RightIcon />
                                </Link>
                            </li>
                        ) : (
                            <li className="rounded border inline-flex p-2 cursor-none">
                                <RightIcon />
                            </li>
                        )}
                    </ul>

                    <ul className="hidden mt-10 justify-center md:flex items-center gap-x-1">
                        {meta.links.map((item, i) => {
                            return item.url != null ? (
                                item.label.includes('Previous') ? (
                                    <PaginateLink active={item.active} key={i} href={item.url}>
                                        <LeftIcon/>
                                    </PaginateLink>
                                ) : item.label.includes('Next') ? (
                                    <PaginateLink active={item.active} key={i} href={item.url}>
                                        <RightIcon/>
                                    </PaginateLink>
                                ) : (
                                    <PaginateLink active={item.active} key={i} href={item.url}>
                                        {item.label}
                                    </PaginateLink>
                                )
                            ) : null;
                        })}
                    </ul>{' '}
                </>
            )}
        </div>
    );
}

function LeftIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function RightIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function PaginateLink({ active, href, children }) {
    return (
        <li>
            <Link
                className={clsx(
                    active && 'text-blue-600 border-blue-300 bg-blue-50',
                    'w-11 h-9 text-sm font-semibold rounded shadow-sm border flex items-center justify-center'
                )}
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}
