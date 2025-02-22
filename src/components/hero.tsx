import { HeroCard } from "./hero-card";
import { HeroStatistics } from "./hero-statistics";
import { HeroTitles } from "./hero-titles";

export function Hero() {
  return (
    <section className="mx-auto w-11/12 max-w-5xl flex flex-col md:flex-row justify-center gap-10 items-center md:items-start py-8">
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
