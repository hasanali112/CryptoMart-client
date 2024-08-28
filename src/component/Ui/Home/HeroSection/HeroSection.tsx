"use client";

import Image from "next/image";
import Container from "../../Shared/Container";
import bannerCoin from "@/assets/banner_coin.png";
import { motion } from "framer-motion";
import banner from "@/assets/banner_img-2.png";
import bannerImage from "@/assets/4.png";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#00150f] relative overflow-hidden ">
      <Container className="relative z-20">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 w-[50%]">
              <h1 className="text-white lg:text-[40px] xl:text-[52px] font-bold">
                Maximize your returns
              </h1>
              <h1 className="text-white lg:text-[40px] xl:text-[52px] font-bold -translate-y-[14px]">
                with smart <span className="text-[#00d094]">investments</span>
              </h1>
              <p className="text-gray-300 ">
                Bitrader allows anyone to invest in different currencies online,
                offering a convenient way to grow their earnings. By leveraging
                Bitrader.
              </p>
              <Button className="bg-[#00d094] text-black w-[170px] rounded-sm h-[50px] mt-9 text-lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-[#00d094] border bg-transparent text-[#00d094] w-[170px] rounded-sm h-[50px] mt-4 text-lg ml-4"
              >
                Watch Vedio
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white mt-5">Follow Us</h1>
                <div className="flex gap-4 text-white mt-4">
                  <div className="border border-[#0d4939] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <FacebookIcon className="w-5" />
                  </div>
                  <div className="border border-[#0d4939] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <TwitchIcon className="w-5" />
                  </div>
                  <div className="border border-[#0d4939] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <InstagramIcon className="w-5" />
                  </div>
                  <div className="border border-[#0d4939] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <YoutubeIcon className="w-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                initial={{ x: -25 }}
                animate={{ x: [-45, -100] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={banner}
                  alt="banner"
                  height={1000}
                  width={1000}
                  className="w-[99%] h-[700px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-[490px] h-[500px] bg-[#132622] rounded-br-[200px] absolute rotate-[25deg] top-[-140px] left-[-72px] z-0"></div>
      <div className="w-[495px] h-[510px] border border-[#132622] rounded-br-[200px] absolute rotate-[25deg] top-[-140px] left-[-72px] z-0"></div>
      <motion.div
        initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
        animate={{
          rotateX: [0, 45], // Rotate along X-axis
          rotateY: [0, 45], // Rotate along Y-axis
          rotateZ: [0, 45], // Rotate along Z-axis
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[9%] left-[8%]"
      >
        <Image
          src={bannerCoin}
          alt="coin"
          width={400}
          height={400}
          className="w-[100px] h-[100px]"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[48%]"
      >
        <Image
          src={bannerImage}
          alt="banner"
          height={200}
          width={200}
          priority
          placeholder="blur"
          className="w-[40px] h-[40px] -translate-y-28 -translate-x-10"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
