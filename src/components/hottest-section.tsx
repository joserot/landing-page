"use client ";

import { MemeCard } from "./meme-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const memes = [
  {
    name: "VIRTUAL",
    image: "/image-2.png",
    percentage: "▲ 0.59%",
    isPositive: true,
    isVerified: false,
    price: "$2.74",
    marketCap: "$1.7B",
  },
  {
    name: "AI16Z",
    image: "/image-3.png",
    percentage: "▼ 11.59%",
    isPositive: false,
    isVerified: true,
    price: "$0.0873",
    marketCap: "$962K",
  },
  {
    name: "TICKER3",
    image: "/image-4.png",
    percentage: null,
    isPositive: false,
    isVerified: true,
    price: "$0.1232",
    marketCap: "$701M",
  },
  {
    name: "TICKER4",
    image: "/image-5.png",
    percentage: null,
    isPositive: false,
    isVerified: false,
    price: "$25.51",
    marketCap: "$988",
  },
];

export function HottestSection() {
  return (
    <section className="mx-auto w-11/12 max-w-5xl py-8">
      <h2 className="text-4xl font-bold mb-2">Hottest</h2>
      <div className="hidden lg:flex items-center gap-2">
        {memes.map((meme) => {
          return (
            <MemeCard
              key={meme.name}
              name={meme.name}
              image={meme.image}
              isPositive={meme.isPositive}
              isVerified={meme.isVerified}
              marketCap={meme.marketCap}
              price={meme.price}
              percentage={meme.percentage}
              href="/"
            />
          );
        })}
      </div>
      <Carousel
        opts={{
          skipSnaps: true,
        }}
        className="lg:hidden h-auto"
      >
        <CarouselContent className="flex">
          {memes.map((meme) => {
            return (
              <CarouselItem
                className="flex-shrink-0 flex-grow-0 basis-auto min-w-0"
                key={meme.name}
              >
                <MemeCard
                  name={meme.name}
                  image={meme.image}
                  isPositive={meme.isPositive}
                  isVerified={meme.isVerified}
                  marketCap={meme.marketCap}
                  price={meme.price}
                  percentage={meme.percentage}
                  href="/"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
