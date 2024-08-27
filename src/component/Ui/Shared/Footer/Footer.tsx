import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/trading.png";

const Footer = () => {
  return (
    <footer className="bg-[#00150f]  text-white pt-10">
      <Container>
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Logo and Description */}
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
            <p className="max-w-sm text-xl">
              Welcome to our trading site! We offer the best, most affordable
              products and services around. Shop now and start finding great
              deals!
            </p>
            <div className="flex mt-4">
              <a href="#" className="mr-2"></a>
              <a href="#"></a>
            </div>
          </div>

          {/* Right Side: Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-2xl mb-2">Quick links</h4>
              <ul>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Teams
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-2xl mb-2">Support</h4>
              <ul>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    FAQs
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-2xl mb-2">Company</h4>
              <ul>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Updates
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Job
                  </a>
                </li>
                <li className="mb-1 text-xl">
                  <a href="#" className="hover:text-gray-300">
                    Announce
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 ">
          <p className="text-xl text-center">
            &copy; 2024 All Rights Reserved By CryptoMart
          </p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
