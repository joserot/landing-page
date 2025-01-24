import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HottestSection } from "@/components/hottest-section";
import { LearnMoreSection } from "@/components/learn-more-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HottestSection />
        <LearnMoreSection />
      </main>
    </>
  );
}
