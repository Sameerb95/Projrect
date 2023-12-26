import React, { useState, useRef } from 'react';
import Logo from '../logo.png';


const navigation = [
  { name: 'Product', href: '/login' },
  { name: 'Features', href: '/navbar' },
  { name: 'About', href: '/about' },
  // { name: 'Demo', href: '' },
];

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Languages');
  const availableLanguages = ['Hindi', 'Marathi', 'English'];

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 text-white bg-black">
        <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-white-900">Your Company</span>
              <img style={{ width: 75, height: 75 }} className="h-8 w-auto" src= {Logo} alt="Logo" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-white-900">
                {item.name}
              </a>
              
            ))}
            <div className="relative inline-block text-left lg:flex lg:flex-1 lg:justify-end">
            <div className="relative">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-white-900 focus:outline-none"
                onClick={toggleDropdown}
              >
                {selectedLanguage}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg z-10"
                >
                  <div className="py-1 bg-white border border-gray-300 rounded-md">
                    {availableLanguages.map((language) => (
                      <a
                        key={language}
                        href="#"
                        onClick={() => handleLanguageChange(language)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {language}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>


        </nav>
      </header>
    </div>
  );
};

export default NavBar;
