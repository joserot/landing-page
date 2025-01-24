import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Navbar } from "./navbar";
import { Searcher } from "./searcher";

import Image from "next/image";

export function BurgerMenu() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button asChild className="p-1 rounded-[4px]" variant={"ghost"}>
          <Image
            priority
            className="w-8 h-8"
            src="/burger-menu.svg"
            width={20}
            height={20}
            alt="Menu icon"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-8 px-4 py-10 justify-center items-center">
          <Navbar />
          <Searcher />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
