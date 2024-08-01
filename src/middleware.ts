// src/pages/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const redirects = new Map<string, string>([
  ['/portfolio/smrt16.com', '/portfolio/smrt16'],
  ['/portfolio/morrowhillvisionworks.com', '/portfolio/morrowhillvisionworks-com'],
  ['/portfolio/bgsf.com', '/portfolio/bgsf-com'],
  ['/portfolio/abetterflorist.com', '/portfolio/a-better-florist'],
  ['/portfolio/okokagency.eu', '/portfolio/okokagency-eu'],
  ['/portfolio/bigmail.io', '/portfolio/bigmail-io'],
  ['/portfolio/crypto%20exchange', '/portfolio/coinage-wallet'],
  ['/portfolio/bugmath.com', '/portfolio/bugmath'],
  ['/portfolio/nubisreservation.com', '/portfolio/nubisreservation-com'],
  ['/portfolio/sendcrypto.com', '/portfolio/sendcrypto-smartcontract'],
  ['/portfolio/onlinepay.com', '/portfolio/onlinepay-wallet'],
  ['/portfolio/pollcart.com', '/portfolio/pollcart'],
  ['/portfolio/Mobile%20App', '/portfolio/custom-box'],
  ['/portfolio/paykolo.com', '/portfolio/paykolo-com'],
  ['/portfolio/paymentz.com', '/portfolio/paymentz-com'],
  ['/portfolio/neofytoullc.com', '/portfolio/p-neofytou'],
  ['/portfolio/donkim.com', '/portfolio/donkim'],
  ['/portfolio/multifamilygrp.com', '/portfolio/multifamilygrp-com'],
  ['/portfolio/erabanq.com', '/portfolio/erabanq-com'],
  ['/portfolio/clarusapex.com', '/portfolio/clarus-apex'],
  ['/portfolio/ios%20game', '/portfolio/bubble-pirate-quest'],
  ['/portfolio/play%20market,%20admin%20panel,%20chat', '/portfolio/kokomix'],
  ['/portfolio/cas.ai', '/portfolio/cas-ai'],
  ['/portfolio/inter-euro.com', '/portfolio/inter-euro'],
  ['/portfolio/smartai', '/portfolio/smrtAI'],
  ['/portfolio/vasilkoff.info', '/portfolio/vasilkoff-info'],
  ['/portfolio/libi.com', '/portfolio/libi-n-daughters'],
  ['/portfolio/github', '/portfolio/vpn-free'],
  ['/portfolio/cbay.com.cy', '/portfolio/cbay'],
  ['/portfolio/heptapolis.com%20crypto%20ico', '/portfolio/heptapolis'],
  ['/portfolio//smrtai%20-%20livechat%20ai%20powered%20chatbot', '/portfolio/smrtAI'],
  ['/blog/timezone-tool', '/blog/1'],
  ['/portfolio/play%20market:%20calculator%20lock%20hide%20app%20photo', '/portfolio/calculator-lock'],
  ['/portfolio/printmyphotos.com', '/portfolio/printmyphotos-com'],
  ['/portfolio/vikentilia.eu', '/portfolio/vikentilia-eu'],
  ['/portfolio/nfttrx.com', '/portfolio/nfttrx'],
  ['/portfolio/nutribar.com', '/portfolio/nutribar'],
  ['/portfolio/naviaddress.com', '/portfolio/naviaddress'],
  ['/portfolio/housekeeperworld.com', '/portfolio/housekeeperworld'],
  ['/portfolio/coingage%20wallet', '/portfolio/coinage-wallet'],
  ['/portfolio/coinage%20wallet', '/portfolio/coinage-wallet'],
  ['/portfolio/kimfoot.com', '/portfolio/kimfoot'],
  ['/portfolio/smrtsgn.com', '/portfolio/smrtsgn'],
  ['/portfolio/styletribute.com', '/portfolio/style-tribute'],
  ['/portfolio/ios%20and%20android%20apps', '/portfolio/calculatorx'],
  ['/portfolio/simetriapay.com', '/portfolio/simetriapay-com'],
  ['/portfolio/summ.ee', '/portfolio/summ-ee'],
  ['/portfolio/walkingcure.com', '/portfolio/walking-cure'],
  ['/portfolio/smrt16.com', '/portfolio/smrt16'],
  ['/our-projects', '/about-us'],
  ['/tools/timezone-availability', '/timezone-availability'],
  ['/easy-vpn-privacy-policy', '/privacy-policy'],
  ['/easy-vpn-free', '/vpn-free'],
  ['/book', '/team/maxim-vasilkov'],
  ['/portfolio/playmarket%20and%20appstore', '/portfolio/vpn-free'],
  ['/portfolio/mobile%20app', '/portfolio/vpn-free'],
  ['/portfolio/ios%20app', '/portfolio/calculatorx'],
  ['/assets/portfolio/custom-box.png', '/assets/portfolio/custom-box.webp'],
  ['/portfolio/smartaichats.com', '/portfolio/smartaichats-com'],

]);

export default function middleware(request: NextRequest) {


    const { pathname, origin, search } = request.nextUrl;
    const redirectUrl = redirects.get(pathname.toLocaleLowerCase());
    //console.log("redirectUrl", redirectUrl, pathname);
    if (redirectUrl) { 
      return NextResponse.redirect(new URL(redirectUrl, origin).toString(), 301);
    } 
  
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);
    requestHeaders.set('x-url', request.url);
    requestHeaders.set('x-search', search);
  
    return NextResponse.next({
      request: {
          headers: requestHeaders,
      }
  });
}
