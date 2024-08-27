"use client";

import { useRef } from "react";
import Container from "../../Shared/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import RoadMapLeftSideCard from "./RoadMapLeftSideCard";

const RoadMap = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  const dividerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef1,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: containerRef3,
    offset: ["0 1", "1 1"],
  });

  const { scrollYProgress: dividerScrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["0 1", "1 1"],
  });

  // Transform values for each card based on scroll progress
  const xRightValueCard1 = useTransform(scrollYProgress1, [0, 1], [400, 0]);
  const xRightValueCard2 = useTransform(scrollYProgress2, [0, 1], [400, 0]);
  const xRightValueCard3 = useTransform(scrollYProgress3, [0, 1], [400, 0]);

  // Transform the height of the divider based on scroll progress
  const dividerHeight = useTransform(
    dividerScrollYProgress,
    [0, 1],
    ["0px", "1700px"]
  );

  return (
    <div className="bg-[#081d17] pt-20 pb-28 overflow-hidden">
      <Container>
        <div>
          <h1 className="text-center text-5xl font-bold text-white">
            Our <span className="text-[#00d094]">RoadMap</span>
          </h1>
          <p className="text-gray-400 text-lg w-[50%] mx-auto text-center mt-6">
            A product roadmap outlines the future direction, aids in team
            planning, and steers the product&apos;s delivery process.
          </p>
        </div>

        <div className="flex gap-10 mt-20">
          {/* Left side cards */}
          <div>
            <RoadMapLeftSideCard />
          </div>

          {/* Divider */}
          <motion.div
            ref={dividerRef}
            style={{ height: dividerHeight, transition: "2s ease" }}
            className="border-r-8 border-[#00d094] w-[10px] rounded-xl"
          ></motion.div>

          {/* Right side cards with scroll-based animations */}
          <div>
            {/* Card 1 */}
            <motion.div
              ref={containerRef1}
              style={{ x: xRightValueCard1 }}
              className="bg-gradient-to-r from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center px-10">
                  <h1 className="text-white text-3xl font-bold text-center mt-4 ">
                    Research
                  </h1>
                  <h1 className="text-[#00d094] font-bold text-3xl">P1</h1>
                </div>
                <p className="text-gray-400 px-10 mt-4">
                  Thorough research is the foundation of any successful project.
                  It involves collecting relevant information, defining clear
                  objectives, and analyzing data to ensure the project is
                  feasible. Without adequate research, projects risk failure due
                  to insufficient understanding and preparation.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              ref={containerRef2}
              style={{ x: xRightValueCard2 }}
              className="bg-gradient-to-r from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer mt-[320px]"
            >
              <div>
                <div className="flex justify-between items-center px-10">
                  <h1 className="text-white text-3xl font-bold text-center mt-4 ">
                    Research
                  </h1>
                  <h1 className="text-[#00d094] font-bold text-3xl">P3</h1>
                </div>
                <p className="text-gray-400 px-10 mt-4">
                  Thorough research is the foundation of any successful project.
                  It involves collecting relevant information, defining clear
                  objectives, and analyzing data to ensure the project is
                  feasible. Without adequate research, projects risk failure due
                  to insufficient understanding and preparation.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              ref={containerRef3}
              style={{ x: xRightValueCard3 }}
              className="bg-gradient-to-r from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer mt-[320px]"
            >
              <div>
                <div className="flex justify-between items-center px-10">
                  <h1 className="text-white text-3xl font-bold text-center mt-4 ">
                    Research
                  </h1>
                  <h1 className="text-[#00d094] font-bold text-3xl">P5</h1>
                </div>
                <p className="text-gray-400 px-10 mt-4">
                  Thorough research is the foundation of any successful project.
                  It involves collecting relevant information, defining clear
                  objectives, and analyzing data to ensure the project is
                  feasible. Without adequate research, projects risk failure due
                  to insufficient understanding and preparation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;
