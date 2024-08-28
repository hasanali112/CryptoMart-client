import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/trading.png";
import google from "@/assets/Google-play-store-2.png";
import playstore from "@/assets/App-store-3.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#00150f]  text-white pt-10">
      <Container>
        <div className=" flex  md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="flex gap-3 items-center pt-2">
                <Image
                  src={logo}
                  alt="Brand Logo"
                  height={500}
                  width={500}
                  className="w-[50px] h-[50px]"
                />
                <h1 className="text-4xl font-bold">
                  Crypto<span>Mart</span>
                </h1>
              </div>
            </div>
            <p className="max-w-sm text-lg text-gray-400">
              Welcome to our trading site! We offer the best, most affordable
              products and services around. Shop now and start finding great
              deals!
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-2">
                <Image src={google} alt="google" width={80} height={80} />
              </a>
              <a href="#">
                <Image src={playstore} alt="google" width={80} height={80} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-2xl mb-2">Quick links</h4>
            <ul>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Teams
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-2xl mb-2">Support</h4>
            <ul>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-2xl mb-2">Company</h4>
            <ul>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Updates
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Job
                </a>
              </li>
              <li className="mb-1 text-lg text-gray-400">
                <a href="#" className="hover:text-gray-300">
                  Announce
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 pb-6">
          <div className="flex justify-between mt-4 md:mt-0">
            <p className="text-lg text-gray-400 text-center">
              &copy; 2024 All Rights Reserved By CryptoMart
            </p>
            <div className="flex gap-4 items-center">
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
      </Container>
    </footer>
  );
};

export default Footer;
