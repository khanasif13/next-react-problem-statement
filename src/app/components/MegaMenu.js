'use client';

import Link from 'next/link';
import { Popover, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const menuData = [
  {
    title: 'React',
    items: [
      { label: 'Counter', href: '/pages/CounterDemo' },
      { label: 'Stop Watch', href: '/pages/StopWatchDemo' },
      { label: 'Todo List', href: '/pages/TodoListDemo' },
      { label: 'Fetch Data', href: '/pages/DataFetchDemo' },
      { label: 'Custom Hook', href: '/pages/CustomHookDemo' },
      { label: 'Debounce Search', href: '/pages/DebounceSearchDemo' },
      { label: 'Dice Problem', href: '/pages/DiceDemo' },
      { label: 'Carousel', href: '/pages/CarouselDemo'}
    ],
  },
  {
    title: 'Company',
    items: [
      
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
];

export default function MegaMenu() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuData.map((menu) => (
                <Popover className="relative" key={menu.title}>
                  {({ open }) => (
                    <>
                      <Popover.Button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                        {menu.title}
                        <ChevronDownIcon
                          className={`ml-1 h-5 w-5 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </Popover.Button>
                      <Popover.Panel className="absolute z-10 mt-3 w-64 px-4 sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black/5 bg-white p-4 grid gap-2">
                          {menu.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <Disclosure.Button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden px-4 pb-4">
            {menuData.map((menu) => (
              <div key={menu.title} className="mb-4">
                <p className="text-gray-600 font-semibold mb-2">{menu.title}</p>
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
