import { Card, CardContent } from "./ui/card";

import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  percentage: string | null;
  isPositive: boolean;
  isVerified: boolean;
  price: string;
  marketCap: string;
  href: string;
}

export function MemeCard({
  name,
  image,
  percentage,
  isPositive,
  isVerified,
  price,
  marketCap,
  href,
}: Props) {
  return (
    <Link className="w-auto max-w-[300px] block" href={href}>
      <Card className="w-full max-w-[300px] h-[350px] lg:h-[300px] rounded-lg shadow-custom overflow-hidden">
        <Image src={image} alt="Card hero image" width={400} height={400} />
        <CardContent className="flex justify-between items-start p-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-xl flex gap items-center">
              {name}
              {isVerified && (
                <Image
                  src="/verified.svg"
                  alt="Verified icon"
                  width={20}
                  height={20}
                  className="w-8 h-8"
                />
              )}
            </span>
            <div className="flex flex-col">
              <span className="text-[#545454] text-sm">Price</span>
              <span className="text-sm font-semibold">{price}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span
              className={` ${
                isPositive ? "text-[#2AC02F]" : "text-[#E73A3A]"
              }  font-semibold text-base`}
            >
              {percentage ? (
                percentage
              ) : (
                <span className="text-white opacity-0">--</span>
              )}
            </span>
            <div className="flex flex-col">
              <span className="text-[#545454] text-sm">Market Cap</span>
              <span className="text-sm font-semibold">{marketCap}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
