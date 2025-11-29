import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
