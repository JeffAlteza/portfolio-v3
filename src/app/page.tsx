import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Workflows } from "@/components/sections/workflows";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Workflows />
        <Projects />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
