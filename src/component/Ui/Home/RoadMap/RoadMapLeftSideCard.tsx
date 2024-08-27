"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const RoadMapLeftSideCard = () => {
  // Separate refs for each card
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  // Separate scroll progress and transforms for each card
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

  const xLeftValue1 = useTransform(scrollYProgress1, [0, 1], [-400, 0]);
  const xLeftValue2 = useTransform(scrollYProgress2, [0, 1], [-400, 0]);
  const xLeftValue3 = useTransform(scrollYProgress3, [0, 1], [-400, 0]);

  return (
    <div>
      {/* card-1 */}
      <motion.div
        ref={containerRef1}
        style={{ x: xLeftValue1 }}
        className="bg-gradient-to-l from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer mt-[320px]"
      >
        <div>
          <div className="flex justify-between items-center px-10">
            <h1 className="text-white text-3xl font-bold text-center mt-4 ">
              Genarate Ideas
            </h1>
            <h1 className="text-[#00d094] font-bold text-3xl">P2</h1>
          </div>
          <p className="text-gray-400 px-10 mt-4">
            Thorough research is the foundation of any successful project. It
            involves collecting relevant information, defining clear objectives,
            and analyzing data to ensure the project is feasible. Without
            adequate research, projects risk failure due to insufficient
            understanding and preparation.
          </p>
        </div>
      </motion.div>
      {/* card-2 */}
      <motion.div
        ref={containerRef2}
        style={{ x: xLeftValue2 }}
        className="bg-gradient-to-l from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer mt-[320px]"
      >
        <div>
          <div className="flex justify-between items-center px-10">
            <h1 className="text-white text-3xl font-bold text-center mt-4 ">
              Genarate Ideas
            </h1>
            <h1 className="text-[#00d094] font-bold text-3xl">P4</h1>
          </div>
          <p className="text-gray-400 px-10 mt-4">
            Thorough research is the foundation of any successful project. It
            involves collecting relevant information, defining clear objectives,
            and analyzing data to ensure the project is feasible. Without
            adequate research, projects risk failure due to insufficient
            understanding and preparation.
          </p>
        </div>
      </motion.div>
      {/* card-3 */}
      <motion.div
        ref={containerRef3}
        style={{ x: xLeftValue3 }}
        className="bg-gradient-to-l from-[#102e25]  w-[500px] h-[250px] group rounded-xl  hover:-translate-y-2 duration-500 cursor-pointer mt-[300px]"
      >
        <div>
          <div className="flex justify-between items-center px-10">
            <h1 className="text-white text-3xl font-bold text-center mt-4 ">
              Genarate Ideas
            </h1>
            <h1 className="text-[#00d094] font-bold text-3xl">P6</h1>
          </div>
          <p className="text-gray-400 px-10 mt-4">
            Thorough research is the foundation of any successful project. It
            involves collecting relevant information, defining clear objectives,
            and analyzing data to ensure the project is feasible. Without
            adequate research, projects risk failure due to insufficient
            understanding and preparation.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadMapLeftSideCard;
