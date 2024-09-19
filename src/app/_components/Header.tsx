// src/app/_components/Header.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MAIN_MENU } from "@/lib/constants";
import Image from 'next/image';
import MenuIconOpen from './MenuIconOpen';
import MenuIconClose from './MenuIconClose';
import Container from './Container';

const Header = (props: any) => {
  const [router, setRouter] = useState('')

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log("switch toggleMenu", showMenu);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setRouter('' + window.location.pathname);
  }, []);

  return (
    <header className='sticky top-0 z-50 transition bg-white duration-300 drop-shadow-xl'>
      <Container className={`h-20 my-2`}>
        <div className={`flex items-center justify-between py-5 lg:py-0`}>
          <Link href="/">
            <Image src="/images/logo-vasilkoff.webp" alt="Vasilkoff logo" className="h-12" width={104} height={48} />
          </Link>
          <div className="flex items-center">
            {/* Overlay */}
            <div id='overlay' onClick={() => toggleMenu()}
              className={`overlay fixed inset-0 h-screen w-full z-[51] bg-black/60 ${showMenu ? '' : 'hidden'}`}></div>

            {/* Menu */}
            <div id='menu_container' className={`${showMenu ? 'max-md:opacity-100' : 'max-md:opacity-0'} `}>
              <div id='menu' className={`menus top-0 pt-1 ${showMenu ? 'overflow-y-auto !right-0' : 'hidden lg:block'}`}>
                <button id='close-menu'
                  onClick={() => toggleMenu()} type="button" aria-label="Menu"
                  className="lg:hidden absolute top-5 right-5 p-2 z-[51] rounded-full bg-primary items-center justify-center"
                  role='button'>
                  <MenuIconClose />
                </button>
                <ul role='menu' onClick={() => setShowMenu(false)} >
                  {MAIN_MENU.map((item, index) => { 
                    const linkStyle  = item.type === 'button' ? {color: '#fff'} : {}; 
                    const listStyle  = item.type === 'button' ? {
                      border: '1px solid #990000', 
                      backgroundColor: '#6d0000',
                      borderRadius: '6px'
                    } : {}; 
                    return (
                    <li role='menuitem' key={index} style={listStyle} className={item.type}>
                      <Link href={item.link} className={router.includes(item.link) ? item.type+' active' : item.type } 
                        aria-label={item.title} 
                        style={linkStyle}>
                        {item.title}
                      </Link>
                    </li>
                  )})}
                </ul>
              </div>
            </div>


            <button
              id='menu-toggle'
              type="button" aria-label="Menu"
              role='button'
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
              onClick={() => toggleMenu()} >
              <MenuIconOpen />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;