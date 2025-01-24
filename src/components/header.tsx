import Image from "next/image";

import { Searcher } from "./searcher";
import { Navbar } from "./navbar";
import { BurgerMenu } from "./burger-menu";

export function Header() {
  return (
    <header className="w-11/12 flex justify-center items-center py-3 md:py-4 mx-auto">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
        <Image
          priority
          className="w-32 h-auto"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <div className="hidden md:block">
          <Searcher />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden"></div>
      </div>
    </header>
  );
}
