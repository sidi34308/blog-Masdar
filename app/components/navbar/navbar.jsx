"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-950">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1  flex items-center justify-center gap-4 sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex gap-10">
                            <img
                                className="h-12 w-auto"
                                src="/logo.svg"
                                alt="Logo"
                            />
                            <AuthLinks />
                        </div>
                        <div className="hidden sm:flex sm:ml-6 items-center">
                            <div className="flex gap-10 items-end ">
                                <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    الرئيسية
                                </a>
                                <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    أخبار
                                </a>
                                <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    اقتصاد
                                </a>
                                <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    تحليلات
                                </a>
                                {/* Add more links as needed */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a
                            href="https://facebook.com"
                            className="text-gray-400 hover:bg-gray-800 p-1 rounded-md ml-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-6 w-6" src='/facebook.svg' />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="text-gray-400 hover:bg-gray-800 p-1 rounded-md ml-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-6 w-6" src='/x.svg' />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-400 hover:bg-gray-800 p-1 rounded-md ml-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-6 w-6" src='/instagram.svg' />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">

                    <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        الرئيسية
                    </a>

                    <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        أخبار
                    </a>


                    <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        اقتصاد
                    </a>

                    <a href="#" className="text-gray-300 hover:bg-[#b99930] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        تحليلات
                    </a>

                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
