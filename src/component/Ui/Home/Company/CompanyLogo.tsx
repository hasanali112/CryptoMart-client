"use client";

import Container from "../../Shared/Container";
import coinbase from "@/assets/campany/barnd01-2.png";
import spotify from "@/assets/campany/barnd02-2.png";
import slack from "@/assets/campany/barnd03-2.png";
import dropbox from "@/assets/campany/barnd04-2.png";
import wbflow from "@/assets/campany/barnd05-2.png";
import zoom from "@/assets/campany/barnd06-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  coinbase,
  spotify,
  slack,
  dropbox,
  wbflow,
  zoom,
  wbflow,
  dropbox,
  spotify,
  coinbase,
  slack,
  zoom,
  wbflow,
  dropbox,
  spotify,
  coinbase,
  slack,
  coinbase,
  spotify,
  slack,
  dropbox,
  wbflow,
  zoom,
  wbflow,
  dropbox,
  spotify,
  coinbase,
  slack,
  zoom,
  wbflow,
  dropbox,
  spotify,
  coinbase,
  slack,
];

const CompanyLogo = () => {
  return (
    <div className="bg-[#002A1E] w-full h-[100px]">
      <Container>
        <div className="overflow-hidden flex gap-10">
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-shrink-0 gap-10 pt-6"
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="company"
                width={240}
                height={240}
                className="w-[120px] h-[49px]"
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-shrink-0 gap-10 pt-6"
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="company"
                width={240}
                height={240}
                className="w-[120px] h-[49px]"
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyLogo;
