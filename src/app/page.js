import Banner from "@/components/Banner";
import Business from "@/components/Business/Business";
import Category from "@/components/Category/Category";
import Consumer from "@/components/Consumer/Consumer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Business />
      <Consumer />
    </div>
  );
}
