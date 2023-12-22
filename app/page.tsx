import Hero from "@/components/Hero";
import Catchy from "@/components/Catchy";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Message from "@/components/Message";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <Catchy />
      <Story />
      <Services />
      <Message />
    </main>
  );
}
