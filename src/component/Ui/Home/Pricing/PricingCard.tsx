"use client";

import { Button } from "@/components/ui/button";
import { SquareCheckBig } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PricingCard = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "0.6 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const yValue = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <div className="grid grid-cols-3 mt-10">
      <motion.div
        ref={divRef}
        style={{ x: xLeftValue, transition: "1s ease" }}
        className="w-[400px] h-[450px] bg-white/10 backdrop-blur-sm rounded-xl mt-5 p-10"
      >
        <h1 className="text-white text-2xl font-bold tracking-wider">Basic</h1>
        <h5 className="text-gray-400  mt-3">
          <span className="text-[#00d094] font-bold text-3xl">$99/</span>
          <span className=" font-bold text-2xl">Monthly</span>
        </h5>
        <div className="mt-4 border-b border-gray-500" />
        <div className="flex flex-col gap-6 mt-4">
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Weekly Web Conference</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">
              Unlimited learning access{" "}
            </span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">24/7 technical support</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Personal training</span>
          </h1>
        </div>
        <Button className="border bg-transparent hover:bg-[#00d094] hover:text-black border-[#00d094] w-full text-[#00d094] text-lg font-semibold mt-10">
          Choose Plan
        </Button>
      </motion.div>
      <motion.div
        ref={divRef}
        style={{ y: yValue, transition: "1s ease" }}
        className="w-[400px] h-[500px] bg-white/10 backdrop-blur-sm rounded-xl p-10"
      >
        <h1 className="text-white text-2xl font-bold tracking-wider">
          Standard
        </h1>
        <h5 className="text-gray-400  mt-3">
          <span className="text-[#00d094] font-bold text-3xl">$120/</span>
          <span className=" font-bold text-2xl">Monthly</span>
        </h5>
        <div className="mt-4 border-b border-gray-500" />
        <div className="flex flex-col gap-6 mt-4">
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Weekly Web Conference</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">
              Unlimited learning access{" "}
            </span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">24/7 technical support</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Personal training</span>
          </h1>
        </div>
        <Button className="border hover:bg-transparent bg-[#00d094] text-black border-[#00d094] w-full hover:text-[#00d094] text-lg font-semibold mt-10">
          Choose Plan
        </Button>
      </motion.div>
      <motion.div
        ref={divRef}
        style={{ x: xRightValue, transition: "1s ease" }}
        className="w-[400px] h-[450px] bg-white/10 backdrop-blur-sm rounded-xl mt-5 p-10"
      >
        <h1 className="text-white text-2xl font-bold tracking-wider">
          Platinum
        </h1>
        <h5 className="text-gray-400  mt-3">
          <span className="text-[#00d094] font-bold text-3xl">$199/</span>
          <span className=" font-bold text-2xl">Monthly</span>
        </h5>
        <div className="mt-4 border-b border-gray-500" />
        <div className="flex flex-col gap-6 mt-4">
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Weekly Web Conference</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">
              Unlimited learning access{" "}
            </span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">24/7 technical support</span>
          </h1>
          <h1 className="inline-flex items-center gap-4">
            <SquareCheckBig className="text-[#00d094]" />
            <span className="text-white text-lg ">Personal training</span>
          </h1>
        </div>
        <Button className="border bg-transparent hover:bg-[#00d094] hover:text-black border-[#00d094] w-full text-[#00d094] text-lg font-semibold mt-10">
          Choose Plan
        </Button>
      </motion.div>
    </div>
  );
};

export default PricingCard;
