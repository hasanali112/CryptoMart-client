import React from "react";
import Container from "../Container";
import logo from "@/assets/trading.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <header className="bg-[#00150f] text-white relative h-[110px]  w-full">
      <nav className="h-full pt-6 relative z-20">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center -translate-x-1">
              <Image
                src={logo}
                alt="Brand Logo"
                height={500}
                width={500}
                className="w-[40px] h-[40px]"
              />
              <h1 className="text-4xl font-bold">
                Crypto<span className="text-[#00d094]">Mart</span>
              </h1>
            </div>
            <ul className="flex justify-around items-center gap-16 font-semibold text-xl">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <li>Stock</li>
              <li>Contact Us</li>
            </ul>
            <div>
              <Button className="bg-[#00d094] text-black w-[170px] rounded-sm h-[50px]  text-lg">
                Join Us
              </Button>
            </div>
          </div>
        </Container>
      </nav>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 90.5% 100%, 0% 100%)",
        }}
        className="bg-[#122621] h-[115px] w-[545px] absolute top-0 z-0"
      ></div>
      <div className=" h-[140px]  border-r border-[#122621] absolute top-0 left-[520px] rotate-[25deg]  z-10"></div>
    </header>
  );
};

export default Navbar;
