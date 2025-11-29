import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
