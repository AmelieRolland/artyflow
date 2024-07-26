import Header from "@/components/header";
import Hero from "@/components/home-page/hero";
import HomeContent from "@/components/home-page/home-content";

export default function Home() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <Hero />
      <HomeContent />
    </main>
    </>
  );
}
