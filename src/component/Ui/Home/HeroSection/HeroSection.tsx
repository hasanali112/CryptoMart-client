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
    <div className="bg-[#00150f] relative overflow-hidden h-[120vh] xl:h-[100vh]">
      <div
        style={{
          backgroundColor: "#132722",
          position: "absolute",
          top: "-155px",
          left: "-75px",
          rotate: "25deg",
          width: "500px",
          height: "500px",
          borderRadius: "30px 30px 100px 0px",
        }}
      ></div>
      <Container>
        <div className="absolute top-[0%] xl:left-[9%] ">
          <div className="grid grid-cols-12 ">
            <div className="col-span-5 xl:mt-28">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={bannerCoin}
                  alt="coin"
                  width={400}
                  height={400}
                  className="w-[120px] h-[120px]  mb-5"
                />
              </motion.div>
              <h1 className="text-white lg:text-[40px] xl:text-[52px] font-bold">
                Maximize your returns
              </h1>
              <h1 className="text-white lg:text-[40px] xl:text-[52px] font-bold -translate-y-[14px]">
                with smart <span className="text-[#00d094]">investments</span>
              </h1>
              <p className="text-gray-300">
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
            <div className="col-span-7">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, -40] }}
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
                  className="w-[90%] h-full"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={bannerImage}
                  alt="banner"
                  height={200}
                  width={200}
                  priority
                  placeholder="blur"
                  className="w-[50px] h-[50px] -translate-y-28 -translate-x-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
