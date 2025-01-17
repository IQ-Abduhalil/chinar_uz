import { Book } from "@/components/book";
import { Catalog } from "@/components/catalog";
import { Categori } from "@/components/categori";
import { Chairs } from "@/components/chairs";
import { Doma } from "@/components/doma";
import { Footer } from "@/components/Footer";
import { Haqida } from "@/components/haqida";
import { Hero } from "@/components/Hero";
import { LogoSection } from "@/components/logoSection";
import Mebeli from "@/components/mebeli/Mebeli";
import { Navs } from "@/components/Navs";
import { SrokSection } from "@/components/srokSection";
import { VaprosSection } from "@/components/vaprosSection";

export default function Home() {
  return (
    <div>
      <main>
        <Navs />
        <Hero />
        <Categori />
        <Catalog />
        <Haqida />
        <Mebeli />
        <Chairs />
        <Book />
        <LogoSection />
        <SrokSection />
        <Doma />
        <VaprosSection />
      </main>
      <Footer />
    </div>
  );
}
