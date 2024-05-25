// src/app/_components/header.jsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MAIN_MENU } from "@/lib/constants";
import Image from 'next/image';
import MenuIconOpen from './MenuIconOpen';
import MenuIconClose from './MenuIconClose';
import Container from './Container';

const Header = (props: any) => {
  const [router, setRouter] = useState('');
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
      <Container className='h-20'>
        <div className="flex items-center justify-between py-5 lg:py-5">
          <Link href="/">
            <Image src="/images/logo-vasilkoff.webp" alt="Vasilkoff logo" className="h-12" width={104} height={48} />
          </Link>
          <div className="flex items-center">
            {/* Overlay */}
            <div
              id='overlay'
              onClick={toggleMenu}
              className={`fixed inset-0 h-screen w-full z-50 bg-black/60 ${showMenu ? '' : 'hidden'}`}
            ></div>

            {/* Menu */}
            <div
              id='menu'
              className={`fixed top-0 right-0 w-64 bg-white pt-1 transform transition-transform duration-300 ease-in-out lg:static lg:w-auto lg:transform-none lg:translate-x-0 lg:flex lg:items-center ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <button
                id='close-menu'
                onClick={toggleMenu}
                type="button"
                aria-label="Close Menu"
                className="lg:hidden absolute top-5 right-5 p-2 z-50 rounded-full bg-primary items-center justify-center"
              >
                <MenuIconClose />
              </button>
              <ul role='menu' className='flex flex-col lg:flex-row' onClick={() => setShowMenu(false)}>
                {MAIN_MENU.map((item, index) => (
                  <li role='menuitem' key={index} className='lg:mx-2'>
                    <Link href={item.link} className={router.includes(item.link) ? 'active' : ''}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id='menu-toggle'
              type="button"
              aria-label="Open Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
              onClick={toggleMenu}
            >
              <MenuIconOpen />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
