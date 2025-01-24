import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export function LearnMoreCard({ href, text }: Props) {
  return (
    <Link
      className="w-full relative h-20 rounded-md overflow-hidden flex justify-center items-center "
      href={href}
    >
      <Image
        className="w-full h-full absolute top-0 left-0 z-0"
        src={"/background.png"}
        width={100}
        height={100}
        alt="Background"
      />
      <span
        className="w-full h-full absolute top-0 left-0 z-0 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.07)_0%,rgba(0,0,0,0.35)_100%)]
"
      ></span>
      <span className="z-10 text-white font-bold text-xl">{text}</span>
    </Link>
  );
}
