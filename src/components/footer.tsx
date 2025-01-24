import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "/#",
    label: "About",
  },
  {
    href: "/#",
    label: "Blog",
  },
  {
    href: "/#",
    label: "Jobs",
  },
  {
    href: "/#",
    label: "Press",
  },
  {
    href: "/#",
    label: "Accessibility",
  },
  {
    href: "/#",
    label: "Partners",
  },
];

const icons = [
  { href: "https://facebook.com", src: "/facebook.png", alt: "Facebook" },
  { href: "https://instagram.com", src: "/instagram.png", alt: "Instagram" },
  { href: "https://x.com", src: "/x.png", alt: "X" },
  { href: "https://github.com", src: "/github.png", alt: "Github" },
  { href: "https://youtube.com", src: "/youtube.png", alt: "Youtube" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-11/12 max-w-5xl flex flex-col justify-center gap-10 items-center py-20">
      <div className="flex gap-5">
        {links.map((link) => {
          return (
            <Link
              className="text-muted-foreground hover:underline"
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-5">
        {icons.map((icon) => {
          return (
            <Link
              className="text-muted-foreground"
              key={icon.alt}
              href={icon.href}
              target="_blank"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
              ></Image>
            </Link>
          );
        })}
      </div>
      <p className="text-muted-foreground text-sm">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  );
}
