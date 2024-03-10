import { NAVIGATION } from '@/app/constants';
import React, { useState, useEffect } from 'react';

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="md:hidden">
      <div className="block">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none focus:text-gray-700">
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 6h20v2H2zm0 7h20v2H2zm0 7h20v2H2z"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div onClick={stopPropagation} className="bg-white shadow-md fixed top-0 right-0 z-50 w-64 px-6 py-4 transform transition duration-200 ease-in-out">
          <ul className="space-y-4 text-right">
            {
              NAVIGATION.map((item) => (
              <li key={item.name}>
                <a href={item.href} {...item.rest} className="text-sm font-semibold leading-6 text-gray-900 transition ease-in-out delay-100 hover:scale-110">
                  {item.name}
                </a>
              </li>
              ))
            }
          </ul>
          <button onClick={toggleMenu} className="absolute top-0 leftt-0 mt-2 mr-2 text-gray-500 focus:outline-none focus:text-gray-700">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};