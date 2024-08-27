"use client";

import Container from "../../Shared/Container";
import cardImage from "@/assets/campany/services01.png";
import cardImage1 from "@/assets/campany/services02.png";
import cardImage2 from "@/assets/campany/services03.png";
import cardImage3 from "@/assets/campany/services04.png";
import cardImage4 from "@/assets/campany/services05.png";
import cardImage5 from "@/assets/campany/services06.png";
import ServiceCard from "./ServiceCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const offerData = [
  {
    id: 1,
    title: "Business Strategy Consulting",
    description:
      "Our Business Strategy Consulting services are designed to help you navigate complex challenges and seize growth opportunities. We work closely with you to develop tailored strategies that align with your business goals, ensuring long-term success.",
    image: cardImage,
  },
  {
    id: 2,
    title: "Financial Guidance",
    description:
      "Our Financial Advisory services are dedicated to helping you make informed financial decisions that drive success. Whether you're managing investments, planning for growth, or navigating complex financial challenges, our team of experts provides comprehensive advice tailored to your unique needs.",
    image: cardImage1,
  },
  {
    id: 3,
    title: "Operational Management",
    description:
      "Our Operational Management services are designed to streamline your business processes and enhance efficiency across all levels of your organization. We focus on optimizing daily operations, improving workflow, and ensuring that resources are utilized effectively to achieve your strategic objectives.",
    image: cardImage2,
  },
  {
    id: 4,
    title: "Business Management",
    description:
      "Our Business Management services are tailored to help you lead your organization to success by providing comprehensive oversight and strategic direction. We partner with you to manage every aspect of your business, from financial planning and resource allocation to employee management and process optimization. ",
    image: cardImage3,
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.4 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <div className="pt-24 pb-20">
      <Container>
        <motion.div
          ref={containerRef}
          style={{ scale: scaleValue, transition: "2s ease" }}
        >
          <h1 className="text-5xl font-bold text-center text-white">
            <span className="text-[#00d094]">Service</span> We Offers
          </h1>
          <p className="text-lg  w-[50%] mx-auto  text-center text-gray-400 mt-5">
            Our top-notch services cover everything from installations and
            repairs to maintenance and beyond!
          </p>
        </motion.div>
        <motion.div
          style={{ y: yValue, transition: "4s ease" }}
          className="grid grid-cols-3 gap-5 mt-16"
        >
          {offerData.map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Services;
