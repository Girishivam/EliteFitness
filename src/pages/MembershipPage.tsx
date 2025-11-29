import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Membership />
      </main>
      <Footer />
    </div>
  );
}
