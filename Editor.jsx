import React, { Fragment } from 'react';
import hljs from 'highlight.js';
import { Tab } from '@headlessui/react';
import { marked } from 'marked';
import clsx from 'clsx';
marked.setOptions({
    highlight: (code) => hljs.highlightAuto(code).value,
});

export default function Editor({ value,...props }) {
    return (
        <Tab.Group>
            <Tab.List className="flex items-center gap-x-4 pl-2 mb-2">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={clsx(
                                'rounded-lg text-sm focus:outline-none',
                                selected
                                    ? 'font-semibold text-semibold'
                                    : 'text-gray-500'
                            )}
                        >
                            Input
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={clsx(
                                'rounded-lg text-sm focus:outline-none',
                                selected
                                    ? 'font-semibold text-semibold'
                                    : 'text-gray-500'
                            )}
                        >
                            Preview
                        </button>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels className="max-h-[540px] h-[540px] overflow-y-auto border rounded-lg">
                <Tab.Panel>
                    <textarea
                        value={value}
                        className="h-[540px] resize-none p-4 w-full border-0 focus:border-0 focus:ring-0"
                        {...props}
                    ></textarea>
                </Tab.Panel>
                <Tab.Panel>
                    <div
                        className="prose max-w-none p-4 prose-blue prose-img:rounded-lg"
                        dangerouslySetInnerHTML={{ __html: marked(value) }}
                    />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
}
