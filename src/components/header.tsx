import Image from "next/image";

import { Searcher } from "./searcher";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="w-11/12 flex justify-center items-center py-4 mx-auto">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <Searcher />
        <Navbar />
      </div>
    </header>
  );
}
