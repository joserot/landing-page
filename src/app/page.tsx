import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HottestSection } from "@/components/hottest-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HottestSection />
      </main>
    </>
  );
}
