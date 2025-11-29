import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeExtras from "@/components/HomeExtras";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div id="hero"><Hero /></div>
        <HomeExtras />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
