// src/app/_components/Footer.tsx
"use client";
import Link from 'next/link';
import { EnvelopeAtFill, TelephoneFill, Telegram, CardText, Whatsapp, GeoAltFill, GeoAlt, Instagram, Facebook } from 'react-bootstrap-icons';
import version from "../../../version.js";
import Container from './Container';
import { FOOTER_MENU } from '@/lib/constants';

 
import CSE from './CSE';
import { trackEvent } from '@phntms/next-gtm';


const Footer = () => {

  const clickB1 = () => {
    trackEvent({
      event: "customEvent",
      data: {
        action: "Click - To: B1",
        category: "CTA",
        label: "Click",
      },
    });
    console.log("clickB1");
  }

  const clickB2 = () => {
    trackEvent({
      event: "customEvent",
      data: {
        action: "Click - To: B2",
        category: "CTA",
        label: "Click",
      },
    });
    console.log("clickB2");
  }

  return (
    <>
      <CSE />
      <footer className="pt-14 bg-black mt-20 lg:pt-[100px] text-light text-base">
        <Container className="grid gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto pb-24">
          <div>
            <div className="py-4">
              <strong>Vasilkoff (CY) Ltd</strong>: Expertise in AI-enhanced web/mobile apps, DApps, and Smart Contracts. Your partner for advanced blockchain and AI solutions.
            </div>
            <ul className="flex flex-col gap-3 font-bold">
              {FOOTER_MENU.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="inline-block transition hover:text-shadow ">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 font-bold">
              <li className="mb-3 text-lg font-extrabold text-white">Cyprus</li>
            </ul>
            <ul>
              <li onClick={clickB1} className='cursor-pointer'>Vasilkoff (CY) Ltd Reg. HE 344792</li>
            </ul>
            <ul className="my-2">


              <li><CardText className="inline-block" />&nbsp;<span className="text-sm">VAT #CY10344792Y TIC 12344792A</span></li>
              <li className="transition hover:text-shadow "><Whatsapp className="inline-block" />&nbsp;<a className="text-sm" href="https://wa.link/drf9vm" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp for +35796253566 (opens in a new tab)">+35796253566</a></li>
              <li className="transition hover:text-shadow "><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+35799169229" target="_blank" rel="noopener noreferrer" aria-label="Call by phone +35799169229 (opens in a new tab)">+35799169229</a></li>
              <li className="transition hover:text-shadow "><EnvelopeAtFill className="inline-block" />&nbsp;<a className="text-sm" href="mailto:sp@vasilkoff.com" target="_blank" rel="noopener noreferrer" aria-label="sp@vasilkoff.com (opens in a new tab)">sp@vasilkoff.com</a></li>

              <li className="transition hover:text-shadow "><GeoAltFill className="inline-block" />&nbsp;<a className="text-sm" href="https://g.page/Vasilkoff-com?share" target="_blank" rel="noopener noreferrer" aria-label="Visit Glastonos 12-14, 2nd Floor, Paphos 8046 on Google Maps (opens in a new tab)">
                Glastonos 12-14, 2nd Floor, Paphos 8046
              </a></li>

            </ul>
            <p className="text-xs my-2">
              <GeoAlt className="inline-block" />&nbsp;ATHINODOROU BUSINESS CENTER Office 402
              Charalambou Mouskou & Grigori Afxentiou 20
              Paphos 8010
            </p>
            <div className='text-xs my-2 text-shadow'>DUNS number: 534508024</div>

          </div>
          <div>
            <ul className="flex flex-col gap-3 font-bold">
              <li className="mb-3 text-lg font-extrabold text-white">UK</li>
            </ul>
            <ul >
              <li onClick={clickB2} className='cursor-pointer'>Vasilkoff Ltd Reg. 07976437</li>
              <li className="transition hover:text-shadow "><Telegram className="inline-block" />&nbsp;<a className="text-sm" href="https://t.me/Vasilkoff" target="_blank" rel="noopener noreferrer" aria-label="Join Vasilkoff on Telegram (opens in a new tab)">
                Vasilkoff
              </a></li>
              <li className="transition hover:text-shadow "><Whatsapp className="inline-block" />&nbsp;<a className="text-sm" href="https://wa.me/61479140233" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp for +61479140233 (opens in a new tab)">+61479140233</a></li>
              <li className="transition hover:text-shadow "><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+19295909246">+19295909246</a></li>
              <li className="transition hover:text-shadow "><TelephoneFill className="inline-block" />&nbsp;<a className="text-sm" href="tel:+442045772478">+442045772478</a></li>
              <li className="transition hover:text-shadow "><EnvelopeAtFill className="inline-block" />&nbsp;<a className="text-sm" href="mailto:maxim@vasilkoff.com" target="_blank" rel="noopener noreferrer" aria-label="maxim@vasilkoff.com (opens in a new tab)">maxim@vasilkoff.com</a></li>

              <li className="transition hover:text-shadow "><GeoAltFill className="inline-block" />&nbsp;<a className="text-sm" href="https://g.page/Vasilkoff-com?share" target="_blank" rel="noopener noreferrer" aria-label="Visit Glastonos 12-14, 2nd Floor, Paphos 8046 on Google Maps (opens in a new tab)">
                20 Wenlock Road, London  N1 7GU
              </a></li>
              <p className="text-xs my-2">
                <GeoAlt className="inline-block" />&nbsp;4 Ah Mat St., Woolner NT
                Australia 0820
              </p>
            </ul>
            <div className='text-xs my-2 text-shadow'>DUNS number: 218272992</div>
          </div>
        </Container>
        <hr className="border-neutral-700" />
        <Container className="items-center max-w-6xl mx-auto justify-between text-center text-shadow md:flex py-8">
          <div className="flex items-center gap-8">
            <Link href="/terms-conditions" className="transition hover:text-light">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-light">
              Privacy Policy
            </Link>
          </div>
          <div className="my-8">
            <ul className="flex items-center gap-4 text-shadow">
              <li className="transition hover:text-light ">
                <Link href="https://www.facebook.com/vasilkoff.software" target="_blank" rel="noopener noreferrer" aria-label="Facebook page (opens in a new tab)">
                  <Facebook />
                </Link>
              </li>
              <li className="transition hover:text-light ">
                <Link href="https://www.instagram.com/vasilkoff/" target="_blank" rel="noopener noreferrer" aria-label="Instagram page (opens in a new tab)">
                  <Instagram />
                </Link>
              </li>
              <li className="text-xs">v.{version}</li>
              <li className="text-xs">
                &copy; 2012-{new Date().getFullYear()} Vasilkoff Ltd
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
