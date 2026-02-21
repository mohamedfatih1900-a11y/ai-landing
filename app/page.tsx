import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import HomeClient from "@/components/HomeClient";



export default function Home() {
  
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
   
      <HomeClient />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
      <ContactForm />
       <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">AI Automation Agency</h1>
      </main>
      <ChatWidget />
      
      
    </main>
  );
}
