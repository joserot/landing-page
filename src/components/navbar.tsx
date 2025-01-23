import { Button } from "./ui/button";

import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "/#",
    src: "/twitter.svg",
  },
  {
    href: "/#",
    src: "/telegram.svg",
  },
  {
    href: "/#",
    src: "/desktop.svg",
  },
];

export function Navbar() {
  return (
    <nav className="flex items-center gap-2">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          <Image
            src={link.src}
            width={10}
            height={10}
            alt="Icon"
            className="h-5 w-5"
          />
        </Link>
      ))}
      <Button>Start Buying</Button>
    </nav>
  );
}
