import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Searcher() {
  return (
    <div className="flex w-full max-w-sm items-center border bg-gray-50 border-gray-300 rounded-full px-2.5 py-1.5">
      <Image
        src={"/magnifying-glass.svg"}
        width={10}
        height={10}
        alt="Search icon"
        className="h-4 w-4 mr-2.5"
      />
      <Input
        type="search"
        placeholder="Search ai agents..."
        className="w-full border-0 bg-gray-50"
      />
      <Image
        src={"/keyboard.svg"}
        width={10}
        height={10}
        alt="Keyboard icon"
        className="h-5 w-8 ml-2.5"
      />
    </div>
  );
}
