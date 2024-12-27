import About from "@/components/About";
import Goals from "@/components/Goals";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Plan from "@/components/Plan";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Goals />
      <Services />
      <Works />
      <Plan/>
    </div>
  );
}
