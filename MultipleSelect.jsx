import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

export default function MultipleSelect({ data, selectedItem, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Listbox
            as="div"
            className="relative rounded-xl"
            value={selectedItem}
            onChange={onChange}
            multiple
            open={isOpen}
        >
            <Listbox.Button className="flex h-11 w-full items-center justify-between gap-x-2 rounded-lg border px-3 focus:outline-none">
                Selected ({selectedItem.length})
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Listbox.Button>
            {selectedItem.length ? (
                <small className="mt-2 flex items-center flex-wrap gap-2 text-xs text-blue-600">
                    {selectedItem.map((item) => (
                        <div
                            key={item.id}
                            className="group flex overflow-hidden select-none rounded bg-gray-100"
                        >
                            <span className="px-2 py-1 font-medium text-black">
                                {item.name}
                            </span>
                            <button
                                value={item.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onChange(
                                        selectedItem.filter(
                                            (item) =>
                                                item.id != e.currentTarget.value
                                        )
                                    );
                                }}
                                className="px-2 py-1 font-bold text-black hover:bg-gray-200 focus:outline-none group-hover:bg-rose-200 group-hover:text-rose-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </small>
            ) : null}
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Listbox.Options className="absolute right-0 mt-1 max-h-96 w-full overflow-y-auto rounded-lg border bg-white py-1 shadow-sm">
                    {data.map((item) => (
                        <Listbox.Option key={item.id} value={item}>
                            {({ selected, active }) => (
                                <div
                                    className={clsx(
                                        'flex cursor-pointer items-center py-1.5 px-4',
                                        active && 'bg-gray-100'
                                    )}
                                >
                                    {(selected ||
                                        selectedItem.find(
                                            (i) => i.id == item.id
                                        )) && (
                                        <svg
                                            className={clsx(
                                                (selected ||
                                                    selectedItem.find(
                                                        (i) => i.id == item.id
                                                    )) &&
                                                    '-mr-4',
                                                'h-4 w-4 text-green-400'
                                            )}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    <span
                                        className={clsx(
                                            selected && 'ml-9',
                                            'ml-6 select-none'
                                        )}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}
