import Container from "../../Shared/Container";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="bg-[#172c25] pb-28 pt-28 relative overflow-hidden">
      <Container className="relative z-20">
        <div>
          <h1 className="text-4xl font-bold text-white text-center">
            Our <span className="text-[#00d094]">Subcription</span> Plan
          </h1>
          <p className="text-lg text-gray-400 md:w-[80%] lg:w-[50%] mx-auto text-center mt-5">
            We provide unbeatable pricing for everything from installations and
            repairs to maintenance and beyond!
          </p>
        </div>
        <div>
          <PricingCard />
        </div>
      </Container>
      <div className="w-[500px] h-[400px] rounded-full bg-[#2d5f51] absolute top-[30%] left-[40%] blur-[80px] z-0"></div>
    </div>
  );
};

export default Pricing;
