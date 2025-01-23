import { HeroCard } from "./hero-card";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-4xl flex justify-center gap-10 items-start py-8">
      <div className="w-1/2 max-w-2xl">
        <h1 className="text-6xl font-bold text-balance">
          Buy Memes. In Two Clicks.
        </h1>
        <p className="text-xl">
          The fastest way to buy memes in just two clicks.
        </p>
        <p className="text-xl">
          Under 1 minute to sign up and no wallet needed.
        </p>
      </div>
      <div>
        <HeroCard />
      </div>
    </section>
  );
}
