
import  Approach  from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experince";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ResentProjects from "@/components/ResentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-center flex-col overflow-hidden  mx-auto">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <ResentProjects/>
      <Clients />
      <Experience />
      <Approach />
    </main>
  );
}
