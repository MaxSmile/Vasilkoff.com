import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MenuIconOpen from './MenuIconOpen';
import MenuIconClose from './MenuIconClose';

const Header = (props: any) => {
    const router = useRouter();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        console.log("toggleMenu",window.innerWidth);
        if (window.innerWidth < 1024) {
            console.log("switch toggleMenu",showMenu);
            setShowMenu(!showMenu);
        } else {
            console.log("dont switch toggleMenu",showMenu);
            setShowMenu(false);
        }
    };

    return (
        <header className='sticky top-0 z-50 transition bg-white duration-300'>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link href="/">
                        <Image src="/images/logo-vasilkoff.webp" alt="Vasilkoff logo" className="h-12" width={104} height={48} />
                    </Link>
                    <div className="flex items-center">
                        {/* Overlay */}
                        <div id='overlay' onClick={() => toggleMenu()} 
                            className={`overlay fixed inset-0 z-[51] bg-black/60 ${showMenu ? '' : 'hidden'}`}></div>

                        {/* Menu */}
                        <div id='menu' className={`menus top-0 pt-10 ${showMenu ? 'overflow-y-auto !right-0' : ''}`}>
                            <div className="border-b border-gray/10 text-right lg:hidden">
                                <button id='close-menu'
                                onClick={() => toggleMenu()} type="button" aria-label="Menu" 
                                className="absolute top-12 right-5 p-2 rounded-full bg-primary items-center justify-center"
                                role='button'>

                                    <MenuIconClose />
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()} role='menu' >
                                <li role='menuitem'>
                                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                        Home
                                    </Link>
                                </li>
                                <li  role='menuitem'>
                                    <Link
                                        href="/portfolio"
                                        className={router.pathname === '/portfolio' || router.pathname.startsWith('/portfolio/') ? 'active' : ''}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li role='menuitem'>
                                    <Link
                                        href="/#team"
                                        className={router.pathname === '/#team' || router.pathname.startsWith('/team/')  ? 'active' : ''}
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li role='menuitem'>
                                    <Link
                                        href="/blog"
                                        className={router.pathname === '/blog' || router.pathname.startsWith('/blog/')  ? 'active' : ''}
                                    >
                                        Blog
                                    </Link>
                                </li>
           
                                <li role='menuitem'>
                                    <Link href="/about-us" className={router.pathname === '/about-us' ? 'active' : ''}>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <button
                            id='menu-toggle'
                            type="button" aria-label="Menu"
                            role='button'
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <MenuIconOpen />
                        </button>
                    </div>
                </div>
            </div>
             
        </header>
    );
};

export default Header;
