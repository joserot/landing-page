import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export function LearnMoreCard({ href, text }: Props) {
  return (
    <Link
      className="w-full min-w-[280px] md:min-w-0 relative h-20 rounded-lg overflow-hidden flex justify-center items-center group shadow-custom"
      href={href}
    >
      <Image
        className="w-full h-full absolute top-0 left-0 z-0 transition-transform duration-300 group-hover:scale-125"
        src={"/background.png"}
        width={100}
        height={100}
        alt="Background"
      />
      <span className="w-full h-full absolute top-0 left-0 z-0 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.07)_0%,rgba(0,0,0,0.35)_100%)]"></span>
      <span className="z-20 text-white font-bold text-xl ">{text}</span>
    </Link>
  );
}
