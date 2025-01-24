import { LearnMoreCard } from "./learn-more-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const links = [
  {
    href: "/#",
    text: "About",
  },
  {
    href: "/#",
    text: "Blog",
  },
  {
    href: "/#",
    text: "Something Else",
  },
  {
    href: "/#",
    text: "TBD",
  },
];

export function LearnMoreSection() {
  return (
    <section className="mx-auto w-11/12 max-w-5xl py-8">
      <h2 className="text-4xl font-bold mb-2">Learn More</h2>
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => {
          return (
            <LearnMoreCard key={link.text} href={link.href} text={link.text} />
          );
        })}
      </div>
      <Carousel
        opts={{
          skipSnaps: true,
        }}
        className="md:hidden h-auto"
      >
        <CarouselContent className="flex">
          {links.map((link) => {
            return (
              <CarouselItem
                className="flex-shrink-0 flex-grow-0 basis-auto min-w-0"
                key={link.text}
              >
                <LearnMoreCard
                  key={link.text}
                  href={link.href}
                  text={link.text}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
