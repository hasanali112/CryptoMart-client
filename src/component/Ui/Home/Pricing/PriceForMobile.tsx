"use client";

import { Button } from "@/components/ui/button";
import { SquareCheckBig } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PriceForMobile = () => {
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: divRef1,
    offset: ["0 1", "0.1 1"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: divRef2,
    offset: ["0 1", "0.3 1"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: divRef3,
    offset: ["0 1", "0.4 1"],
  });

  const xLeftValue = useTransform(scrollYProgress1, [0, 1], [-400, 0]);
  const xRightValue = useTransform(scrollYProgress3, [0, 1], [400, 0]);
  const yValue = useTransform(scrollYProgress2, [0, 1], [300, 0]);

  return (
    <div className="block lg:hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <motion.div
          ref={divRef1}
          style={{ x: xLeftValue, transition: "1s ease" }}
          className="xl:w-[400px] h-[480px] bg-white/10 backdrop-blur-sm rounded-xl mt-5 p-10 border border-transparent  hover:border-[#00d094] hover:-translate-y-3 duration-500 cursor-pointer"
        >
          <h1 className="text-white text-2xl font-bold tracking-wider">
            Basic
          </h1>
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
              <span className="text-white text-lg ">
                24/7 technical support
              </span>
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
          ref={divRef2}
          style={{ y: yValue, transition: "1s ease" }}
          className="xl:w-[400px] h-[500px] bg-white/10 backdrop-blur-sm rounded-xl p-10 border border-transparent  hover:border-[#00d094] hover:-translate-y-3 duration-500 cursor-pointer"
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
              <span className="text-white text-lg ">
                24/7 technical support
              </span>
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
          ref={divRef3}
          style={{ x: xRightValue, transition: "1s ease" }}
          className="xl:w-[400px] h-[480px] bg-white/10 backdrop-blur-sm rounded-xl mt-5 p-10 border border-transparent  hover:border-[#00d094] hover:-translate-y-3 duration-500 cursor-pointer"
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
              <span className="text-white text-lg ">
                24/7 technical support
              </span>
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
    </div>
  );
};

export default PriceForMobile;
