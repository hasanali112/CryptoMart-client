import React from "react";
import Container from "../Container";
import logo from "@/assets/trading.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-[#00150f] text-white relative h-[100px] overflow-hidden">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
          backgroundColor: "#132722",
          position: "absolute", // Ensure the clipPath div is positioned
          top: "0",
          width: "550px",
          height: "100px",
        }}
      ></div>
      <Container>
        <div className="absolute top-4 ">
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
      </Container>
      <div className="relative">
        {/* <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 5% 100%)",
            backgroundColor: "#132722",
            position: "absolute", // Ensure the clipPath div is positioned
            top: "0",
            right: "0px",
            width: "700px",
            height: "100px",
          }}
        ></div> */}
        <Container>
          <div className="absolute top-8 left-[50%]">
            <ul className="flex justify-around items-center gap-16 font-semibold text-xl">
              <li>Home</li>
              <li>About</li>
              <li>Stock</li>
              <li>Contact Us</li>
              <li>
                <button className="bg-[#00d094] text-black text-lg font-semibold w-[100px] h-[40px]  -translate-y-[5px] rounded-md">
                  Join us
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
