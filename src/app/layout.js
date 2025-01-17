import "./globals.css";
import { Header } from "@/components/Header";
import { Navs } from "@/components/Navs";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
