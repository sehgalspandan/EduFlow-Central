"use client";

import { useState } from 'react';
import { useRouter, usePathname} from 'next/navigation'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    
    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            
                                <a href='/' className="text-xl font-bold  text-teal-700 dark:text-white">Answers Collector</a>
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className={`text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition-all ease-in-out dark:text-white dark:hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Home</a>
                                <a href="https://span41n.vercel.app" className={`text-gray-800 hover:text-gray-900 transition-all ease-in-out hover:bg-gray-200 dark:text-white dark:hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Portfolio</a>
                                <a href="mailto:spandansehgal@gmail.com" className={`text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition-all ease-in-out dark:text-white dark:hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/contact' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Contact</a>
                                <a href="https://github.com/SpandyBoss/" className={`text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition-all ease-in-out dark:text-white dark:hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium `}>Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                                        strokeWidth={2}
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
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                   
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    
                        <a href='/' className={`text-gray-800 hover:text-gray-900  dark:text-white dark:hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Home</a>
                   
                   
                        <a href="https://span41n.vercel.app" className={`text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Portfolio</a>
                   
                        <a  href="mailto:spandansehgal@gmail.com" className={`text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'bg-gray-200 dark:bg-gray-700 ' : ''}`}>Contact</a>
                        
                        <a href="https://github.com/SpandyBoss/" className={`text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium `}>Github Repo</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
