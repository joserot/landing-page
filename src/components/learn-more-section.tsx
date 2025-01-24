import { LearnMoreCard } from "./learn-more-card";

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
    <section className="mx-auto w-full max-w-5xl py-8">
      <h2 className="text-4xl font-bold mb-2">Learn More</h2>
      <div className="w-full flex items-center gap-2">
        {links.map((link) => {
          return (
            <LearnMoreCard key={link.text} href={link.href} text={link.text} />
          );
        })}
      </div>
    </section>
  );
}
