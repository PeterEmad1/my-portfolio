
import  Approach  from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experince";
import Footer from "@/components/Footer";
import GithubGraph from "@/components/GithubCalender";
import GithubProjects from "@/components/GithubProjects";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ResentProjects from "@/components/ResentProjects";
import ScrollText from "@/components/ScrollText";
import SideVelocityText from "@/components/SideVelocityText";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-center flex-col overflow-hidden  mx-auto">
      <FloatingNav navItems={navItems} />
      <SideVelocityText />
      <Hero />
      <GithubGraph />
      {/* <GithubProjects /> */}
      {/* <ScrollText /> */}
      <Grid />
      <ResentProjects/>
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </main>
  );
}
