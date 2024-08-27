"use client";

import Image from "next/image";
import Container from "../../Shared/Container";
import offer from "@/assets/features01.png";
import offer2 from "@/assets/features_shape.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Offer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.2 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-800, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [800, 0]);
  const rightValue = useTransform(scrollYProgress, [0, 1], [1500, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-[#172c25] pb-24 relative overflow-hidden">
      <Container>
        <div className="flex justify-between gap-10 pt-28 relative z-10">
          <motion.div
            ref={containerRef}
            style={{ x: xLeftValue, transition: "2s ease" }}
            className="w-[45%] flex-shrink-0"
          >
            <h1 className="text-white font-bold text-5xl">
              <span className="text-[#00d094]">Our Perks</span> Advantages
            </h1>
            <p className="text-gray-300 mt-5 text-lg w-[90%]">
              Experience the full power of our product with exceptional features
              and premium quality.
            </p>
            <div className="mt-10 space-y-6">
              <div className="w-[80%] h-[100px] bg-white/10 backdrop-blur-sm pt-2 rounded-xl">
                <h5 className="text-white text-lg ml-4">
                  Providing funds to fuel your new project ventures.
                </h5>
              </div>
              <div className="w-[80%] h-[100px] bg-white/10 backdrop-blur-sm pt-2 rounded-xl">
                <h5 className="text-white text-lg ml-4 ">
                  Providing funds to fuel your new project ventures.
                </h5>
              </div>
              <div className="w-[80%] h-[100px] bg-white/10 backdrop-blur-sm  pt-2  rounded-xl">
                <h5 className="text-white text-lg ml-4">
                  Providing funds to fuel your new project ventures.
                </h5>
              </div>
              <div className="w-[80%] h-[100px] bg-white/10 backdrop-blur-sm pt-2  rounded-xl">
                <h5 className="text-white text-lg ml-4 ">
                  Providing funds to fuel your new project ventures.
                </h5>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={containerRef}
            style={{ x: xRightValue, transition: "2s ease" }}
            className="flex-shrink-0 pt-10 relative z-20"
          >
            <motion.div
              ref={containerRef}
              initial={{ x: 0 }}
              animate={{ x: [0, -50] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute top-10 left-7 rotate-[-7deg]"
            >
              <Image
                src={offer2}
                alt="offer"
                width={100}
                height={100}
                className="w-[70px] h-[40px] "
              />
            </motion.div>
            <div>
              <Image
                src={offer}
                alt="offer"
                width={1000}
                height={1000}
                className="w-[600px] h-[600px] object-cover"
              />
              <motion.div
                ref={containerRef}
                style={{
                  x: rightValue,
                  opacity: opacityValue,
                  transition: "5s ease",
                }}
                className="w-[55%] h-[90px] bg-white/10 backdrop-blur-sm absolute bottom-16 rounded-[30px] rounded-tr-[70px] rounded-br-[10px] pt-5 px-4 z-30"
              >
                <h5 className="text-white text-lg ml-4">
                  <span className="text-4xl font-bold text-[#00d094]">10M</span>{" "}
                  <span className="text-xl font-semibold">
                    Available for loan
                  </span>
                </h5>
              </motion.div>
              <motion.div
                ref={containerRef}
                style={{
                  x: rightValue,
                  opacity: opacityValue,
                  transition: "5s ease",
                }}
                className="w-[60%] h-[100px] bg-white/10 backdrop-blur-sm absolute top-5 right-0 rounded-[30px] rounded-bl-[70px] rounded-tl-[10px] pt-5 px-4 z-30"
              >
                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-[80px] h-[80px] border-8 border-blue-600 flex justify-center items-center -translate-y-[10px]">
                    <span className="text-xl font-bold text-[#00d094] ">
                      10%
                    </span>{" "}
                  </div>
                  <h5 className="text-white text-lg ml-4">
                    <span className="text-xl font-semibold">
                      Interest Rate For Loan
                    </span>
                  </h5>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
      <div className="w-[500px] h-[400px] rounded-full bg-[#2d5f51] absolute top-[30%] right-[10%] blur-[80px] z-0"></div>
      {/* <div className="w-[200px] h-[400px] rounded-full bg-[#2d5f51] absolute top-[30%] left-[10%] blur-[80px] z-0"></div> */}
    </div>
  );
};

export default Offer;
