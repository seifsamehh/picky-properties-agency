import dynamic from "next/dynamic";

// Code Splitting: Lazy load components
const Hero = dynamic(() => import("@/components/Hero"));
const Catchy = dynamic(() => import("@/components/Catchy"));
const Story = dynamic(() => import("@/components/Story"));
const Services = dynamic(() => import("@/components/Services"));
const Message = dynamic(() => import("@/components/Message"));

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
