import { TOOLS_LINKS } from "@/lib/constants";
import Link from "next/link";
import React from "react";


interface OtherServicesAndToolsProps {
  exceptionLink: string;
}

export default function OtherServicesAndTools({ exceptionLink }: OtherServicesAndToolsProps) {

  return (
    <div className="my-5">
      <p>Check out our other services and tools:</p>
      <ul>
        {TOOLS_LINKS
          .filter((item) => item.link !== exceptionLink)
          .map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="underline text-primary">{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
