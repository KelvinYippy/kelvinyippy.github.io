export const Footer = () => {

    return (
        <footer className="absolute bottom-0 left-0 right-0 items-center rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="relative w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    Built with React © 2025
                </span>
                <ul className="flex flex-wrap pt-2 md:pt-0 items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href='https://github.com/KelvinYippy' target='_blank' className="items-center justify-center flex mx-3">
                            <svg 
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >  
                                <path 
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kelvin-yip7/" target='_blank' className="items-center justify-center flex mx-3">
                            <svg 
                                className="h-8 w-8"  
                                viewBox="0 0 24 24"  
                                fill="none"  
                                stroke="currentColor"  
                                strokeWidth="2"  
                                strokeLinecap="round"  
                                strokeLinejoin="round"
                            >  
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  
                                <rect x="2" y="9" width="4" height="12" />  
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )

}