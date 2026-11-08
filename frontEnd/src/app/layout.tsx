import HeaderComponent from "@/components/HeaderComponent";
import ContainerComponent from "@/components/ContainerComponent";
import { Outfit } from "next/font/google";
import "../css/globals.css";
import FooterComponent from "@/components/FooterComponent";
import UpComponents from "@/components/UpComponents";
import { CartProvider } from "@/context/CartContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col font-outfit">
        <CartProvider>
          <HeaderComponent />
          <ContainerComponent>
            {children} <UpComponents />
          </ContainerComponent>
          <FooterComponent />
        </CartProvider>
      </body>
    </html>
  );
}
