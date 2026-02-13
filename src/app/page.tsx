import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Process />
      <ServiceArea />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
