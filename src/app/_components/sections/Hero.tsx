// src/app/_components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="overflow-hidden pt-[82px] sm:-mx-[250px] lg:-mx-[150px] lg:pt-[106px]" id="over">
      <Container className="relative">
        <div className="relative pt-14 pb-0 lg:pt-20 lg:pb-40 xl:pt-36">
          <div className="relative text-center ">
            <h2 className="text-4xl font-bold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] " >
              <span className="text-primary" style={{ letterSpacing: "0.04em" }}>Team</span>
              <span className="text-secondary">work</span>&nbsp;<span>makes</span>
              <br style={{ fontSize: "10%", lineHeight: "10%" }} />
              <span style={{ fontSize: "70%", lineHeight: "50%" }}>the dream work</span>
            </h2>
            <div className="pb-10  text-lg font-extralight leading-[30px]"
              style={{ maxWidth: "840px", margin: "19px auto" }}>
              We offer bespoke web and mobile development tailored to your business needs, with cutting-edge Blockchain and AI solutions that drive growth and unlock opportunities.
            </div>
            <Link href="/contact-us" className="btn mx-auto mt-2 block w-fit text-primary">
              talk to us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
