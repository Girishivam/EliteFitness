import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Trainers from "@/components/Trainers";

export default function TrainersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Trainers />
      </main>
      <Footer />
    </div>
  );
}
