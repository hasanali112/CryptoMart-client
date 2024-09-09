"use client";

import Image from "next/image";
import Container from "../../Shared/Container";
import about from "@/assets/about01-2.png";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CompanyStatic = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["0 1", "0.2 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-700, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const yValue = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <div className="bg-[#00150f]  relative pt-20  lg:pb-40 xl:pb-28 overflow-hidden">
      <Container>
        <div className="relative flex flex-col lg:flex-row md:justify-between md:gap-3 lg:gap-32 z-10">
          <div className="flex flex-shrink-0">
            <motion.div
              ref={refContainer}
              style={{ x: xLeftValue, transition: "2s ease" }}
              className="relative"
            >
              <Image
                src={about}
                alt="comapnyLogo"
                width={1000}
                height={1000}
                className="lg:w-[600px] md:w-[700px] md:h-[700px] lg:h-[600px]"
              />
              <motion.div
                ref={refContainer}
                style={{ x: xLeftValue, transition: "3s ease" }}
                className="bg-white/10 backdrop-blur-sm w-[280px] md:w-[380px] h-[100px] rounded-[30px] rounded-tr-[90px] pt-5 absolute top-[10%] md:top-[15]"
              >
                <h1 className="text-[#00d094] text-3xl font-bold ml-7">
                  10 Years
                </h1>
                <h6 className="text-white text-xl font-semibold ml-8">
                  Consulting Experience
                </h6>
              </motion.div>
              <motion.div
                ref={refContainer}
                style={{ y: yValue, transition: "3s ease" }}
                className="bg-white/10 backdrop-blur-sm w-[280px] md:w-[380px] h-[100px] rounded-[30px] rounded-bl-[90px] pt-5 absolute bottom-[5%] md:bottom-[12%] md:left-[46%]"
              >
                <h1 className="text-[#00d094] text-3xl font-bold ml-16">
                  25K+
                </h1>
                <h6 className="text-white text-xl font-semibold ml-16">
                  Our Consumers
                </h6>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            ref={refContainer}
            style={{ x: xRightValue, transition: "2s ease" }}
            className="md:mt-0 lg:mt-32 mt-10 "
          >
            <h1 className="text-white font-bold text-[30px] lg:text-4xl xl:text-[43px]">
              Get to <span className="text-[#00d094]">know our</span> company
            </h1>
            <h1 className="text-white font-bold text-[30px] lg:text-4xl xl:text-[43px] lg:mt-4">
              miss the opportunity
            </h1>
            <p className="text-gray-500 mt-5">
              Hey there! So glad you stopped by to Meet Our Company. Don&apos;t
              miss out on this opportunity to learn about what we do and the
              amazing team that makes it all happen! Our company is all about
              creating innovative solutions and providing top-notch services to
              our clients. From start to finish, we&apos;re dedicated to
              delivering results that exceed expectations.
            </p>
            <Button className="bg-[#00d094] hover:bg-[#2c9074] transition-transform hover:-translate-y-2 duration-700 w-[200px] h-[50px] text-black text-xl font-semibold mt-10 md:mb-20">
              Explore More
            </Button>
          </motion.div>
        </div>
      </Container>
      <div className="w-[300px] h-[300px] rounded-full bg-[#2d5f51] absolute top-[30%] left-[15%] blur-[90px] z-0"></div>
    </div>
  );
};

export default CompanyStatic;
