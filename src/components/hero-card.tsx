import { Card, CardContent } from "./ui/card";

import Image from "next/image";

export function HeroCard() {
  return (
    <Card className="w-full max-w-[300px] h-[300px] rounded-md shadow-custom overflow-hidden relative">
      <Image
        src="/image-1.png"
        alt="Card hero image"
        width={400}
        height={400}
      />
      <Image
        src="/verified.svg"
        alt="Verified icon"
        width={42}
        height={42}
        className="w-11 h-11 absolute right-2 top-2"
      />
      <CardContent className="flex justify-between items-start p-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xl">VIRTUAL</span>
          <div className="flex flex-col">
            <span className="text-[#545454] text-sm">Price</span>
            <span className="text-sm font-semibold">$2.74</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#2AC02F] font-semibold text-base">
            ▲ 0.59%
          </span>
          <div className="flex flex-col">
            <span className="text-[#545454] text-sm">Market Cap</span>
            <span className="text-sm font-semibold">$1.7B</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
