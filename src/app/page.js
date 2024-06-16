import Banner from "@/components/Banner";
import Business from "@/components/Business/Business";
import Category from "@/components/Category/Category";
import Consumer from "@/components/Consumer/Consumer";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Business />
      <Consumer />
      <Footer />
    </div>
  );
}
