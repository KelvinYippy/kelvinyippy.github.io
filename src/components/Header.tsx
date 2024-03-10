"use client";

import { NAVIGATION } from "@/app/constants"
import { useEffect, useState } from "react"
import { MobileHeader } from "./MobileHeader";

export const Header = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <header className="sticky inset-x-0 top-0 z-100 dark:invert">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                    <span className="dark:invert">KY</span>
                    </a>
                </div>
                {
                    isMobile ? 
                    <MobileHeader/> :
                    <div className="md:flex md:gap-x-12">
                        {NAVIGATION.map((item) => (
                        <a key={item.name} href={item.href} {...item.rest} className="text-sm font-semibold leading-6 text-gray-900 transition ease-in-out delay-100 hover:scale-110">
                            {item.name}
                        </a>
                        ))}
                    </div> 
                }
            </nav>
        </header>
    )

}