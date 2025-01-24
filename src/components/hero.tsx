import { HeroCard } from "./hero-card";
import { HeroStatistics } from "./hero-statistics";
import { HeroTitles } from "./hero-titles";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl flex justify-center gap-10 items-start py-8">
      <div className="max-w-2xl flex flex-col gap-5">
        <HeroTitles />
        <HeroStatistics />
      </div>
      <div>
        <HeroCard />
      </div>
    </section>
  );
}
