"use client";

import Image from "next/image";
import Container from "../../Shared/Container";
import offer from "@/assets/features01.png";
import offer2 from "@/assets/features_shape.png";

const OfferMobile = () => {
  return (
    <div className="bg-[#172c25] pb-24 mt-16  relative overflow-hidden block md:hidden lg:hidden">
      <Container>
        <div className="flex flex-col justify-between gap-10  pt-16 relative z-10">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-3xl">
              <span className="text-[#00d094]">Our Perks</span> Advantages
            </h1>
            <p className="text-gray-300 mt-5 text-lg md:w-[90%]">
              Experience the full power of our product with exceptional features
              and premium quality.
            </p>
            <div className="mt-10 space-y-6">
              <div className="w-[100%] h-[140px] bg-white/10 backdrop-blur-sm pt-3 rounded-xl">
                <h5 className="text-white text-lg ml-4">
                  We provide the financial support you need to kickstart your
                  new project ventures. Fuel your ideas with our dedicated
                  funding solutions.
                </h5>
              </div>
              <div className="w-[100%] h-[140px] bg-white/10 backdrop-blur-sm pt-3 rounded-xl">
                <h5 className="text-white text-lg ml-4 mx-4">
                  Empower your project ideas with our tailored funding options.
                  We&apos;re here to help you turn your vision into reality.
                </h5>
              </div>
              <div className="w-[100%] h-[140px] bg-white/10 backdrop-blur-sm pt-3 rounded-xl">
                <h5 className="text-white text-lg ml-4">
                  Empower your new projects with the funding they deserve.
                  We&apos;re here to help turn your vision into reality.
                </h5>
              </div>
              <div className="w-[100%] h-[140px] bg-white/10 backdrop-blur-sm pt-3 rounded-xl">
                <h5 className="text-white text-lg ml-4 mx-3">
                  Fuel your next venture with our project funding. We&apos;re
                  here to help you bring your ideas to life.
                </h5>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 pt-10 relative z-20">
            <div>
              <Image
                src={offer}
                alt="offer"
                width={1000}
                height={1000}
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="w-[100%] h-[90px] bg-white/10 backdrop-blur-sm absolute bottom-[-15px] rounded-[30px] rounded-tr-[70px] rounded-br-[10px] pt-5 px-4 z-30">
                <h5 className="text-white text-lg ml-4">
                  <span className="text-4xl font-bold text-[#00d094]">10M</span>{" "}
                  <span className="text-xl font-semibold">
                    Available for loan
                  </span>
                </h5>
              </div>
              <div className="w-[100%] h-[100px] bg-white/10 backdrop-blur-sm absolute top-2 right-0 rounded-[30px] rounded-bl-[70px] rounded-tl-[10px] pt-5 px-4 z-30">
                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-[80px] h-[80px] border-8 border-blue-600 flex justify-center items-center -translate-y-[10px]">
                    <span className="text-xl font-bold text-[#00d094]">
                      10%
                    </span>{" "}
                  </div>
                  <h5 className="text-white text-lg ml-4">
                    <span className="text-xl font-semibold">
                      Interest Rate For Loan
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-[500px] h-[400px] rounded-full bg-[#2d5f51] absolute top-[30%] right-[10%] blur-[80px] z-0"></div>
      {/* <div className="w-[200px] h-[400px] rounded-full bg-[#2d5f51] absolute top-[30%] left-[10%] blur-[80px] z-0"></div> */}
    </div>
  );
};

export default OfferMobile;
