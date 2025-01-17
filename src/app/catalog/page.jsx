import { Book } from "@/components/book";
import CatalogHero from "@/components/cataloghero/CatalogHero";
import { Chairs } from "@/components/chairs";
import { Doma } from "@/components/doma";
import { Footer } from "@/components/Footer";
import { LogoSection } from "@/components/logoSection";
import { Navs } from "@/components/Navs";
import { SrokSection } from "@/components/srokSection";
import { VaprosSection } from "@/components/vaprosSection";
import XitCatalog from "@/components/xitCatalog/XitCatalog";

export default function Catalog() {
  return (
    <>
      <main>
        <Navs />
        <CatalogHero />
        <XitCatalog />
        <Chairs />
        <Book />
        <LogoSection />
        <SrokSection />
        <Doma />
        <VaprosSection />
      </main>
      <Footer />
    </>
  );
}
