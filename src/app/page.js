import FeaturedProject from "@/components/FeaturedProject";
import Header from "@/components/Header";
import Services from "@/components/Services";
import YearsOfExp from "@/components/YearsOfExp";

export default function Home() {
  return (
    <main>
      <Header />
      <YearsOfExp />
      <FeaturedProject />
      <Services />
    </main>
  );
}
