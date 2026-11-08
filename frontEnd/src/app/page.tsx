import BannerContainer from "@/components/HomePage/BannerContaner";
import IntroComponent from "@/components/HomePage/IntroComponent";
import LocationSection from "@/components/HomePage/LocationSection";
import RandomProducts from "@/components/HomePage/RandomProducts";
import MarqueeComponent from "@/components/HomePage/MarqueeComponent";
import { Metadata } from "next";

import MicrosoftLogo from "../../public/images/Marquee/Microsoft-Logo.wine.svg";
import AppleLogo from "../../public/images/Marquee/Apple_Inc.-White-Logo.wine.svg";
import AsusLogo from "../../public/images/Marquee/Asus-Logo.wine.svg";
import DellLogo from "../../public/images/Marquee/Dell-Logo.wine.svg";
import HPLogo from "../../public/images/Marquee/HP_Inc.-Logo.wine.svg";
import LenovoLogo from "../../public/images/Marquee/Lenovo_Vibe_K4_Note-Logo.wine.svg";
import SamsungLogo from "../../public/images/Marquee/Samsung-Logo.wine.svg";
import AcerLogo from "../../public/images/Marquee/Acer_Inc.-Logo.wine.svg";
import VideoComponent from "@/components/HomePage/VideoComponent";

export const metadata: Metadata = {
  title: "Nexel || Home Page",
  description: "",
};

export default function Home() {
  return (
    <>
      <IntroComponent />
      <BannerContainer />
      <RandomProducts />
      <MarqueeComponent
        images={[
          MicrosoftLogo,
          AppleLogo,
          AsusLogo,
          DellLogo,
          HPLogo,
          LenovoLogo,
          SamsungLogo,
          AcerLogo,
        ]}
      />
      <VideoComponent src="/video/HomePageVideo.mp4" />
      <LocationSection />
    </>
  );
}
