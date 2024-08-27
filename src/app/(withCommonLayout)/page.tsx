import CompanyStatic from "@/component/Ui/Home/Company static/CompanyStatic";
import CompanyLogo from "@/component/Ui/Home/Company/CompanyLogo";
import HeroSection from "@/component/Ui/Home/HeroSection/HeroSection";
import Offer from "@/component/Ui/Home/Offer/Offer";
import Pricing from "@/component/Ui/Home/Pricing/Pricing";
import RoadMap from "@/component/Ui/Home/RoadMap/RoadMap";
import Services from "@/component/Ui/Home/Services/Services";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#00150f]">
      <HeroSection />
      <CompanyLogo />
      <CompanyStatic />
      <Offer />
      <Services />
      <RoadMap />
      <Pricing />
    </div>
  );
};

export default HomePage;
