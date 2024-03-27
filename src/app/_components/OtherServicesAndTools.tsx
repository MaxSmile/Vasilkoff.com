import Link from "next/link";
import React from "react";

interface LinkItem {
  title: string;
  link: string;
}

interface OtherServicesAndToolsProps {
  exceptionLink: string;
}

export default function OtherServicesAndTools({ exceptionLink }: OtherServicesAndToolsProps) {
  const linksList: LinkItem[] = [
    {
      title: 'Rich Text to Markdown',
      link: '/rich-text2md',
    },
    {
      title: 'HTML to Markdown',
      link: '/html2md',
    },
    {
      title: 'Markdown to HTML',
      link: '/md2html',
    },
    {
      title: 'Timezones Availability Viewer',
      link: '/timezone-availability',
    }
  ];

  return (
    <div className="my-5">
      <p>Check out our other services and tools:</p>
      <ul>
        {linksList
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
