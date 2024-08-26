import CompanyStatic from "@/component/Ui/Home/Company static/CompanyStatic";
import CompanyLogo from "@/component/Ui/Home/Company/CompanyLogo";
import HeroSection from "@/component/Ui/Home/HeroSection/HeroSection";
import Offer from "@/component/Ui/Home/Offer/Offer";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#00150f]">
      <HeroSection />
      <CompanyLogo />
      <CompanyStatic />
      <Offer />
    </div>
  );
};

export default HomePage;
