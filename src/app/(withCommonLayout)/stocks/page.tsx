import Container from "@/component/Ui/Shared/Container";
import StcokTable from "@/component/Ui/Stock/StcokTable";
import Image from "next/image";
import about from "@/assets/breadcrumb_bg-1.png";

import dynamic from "next/dynamic";
import React from "react";
import StockPegination from "@/component/Ui/Stock/StockPegination";

const Stock = () => {
  const StockBreadCamp = dynamic(
    () => import("@/component/Ui/Stock/StockBreadCamp"),
    { ssr: false }
  );
  return (
    <div className="bg-[#081d17] h-[150vh]  relative">
      <Image
        src={about}
        alt="about"
        width={1000}
        height={400}
        className="w-full h-[200px] relative z-10"
      />
      <Container className="absolute top-[5%] left-[7%]">
        <div className="relative z-20 ">
          <h1 className="text-white font-bold text-4xl">
            Today <span className="text-[#00d094]">Crypto</span> Price
          </h1>
          <StockBreadCamp />
          <div>
            <div className="mt-28">
              <StcokTable />
            </div>
          </div>
        </div>
        <div className="text-white mt-16">
          <StockPegination />
        </div>
      </Container>
      <div className="w-[490px] h-[500px] bg-[#132622] rounded-br-[200px] absolute rotate-[25deg] top-[-140px] left-[-72px] z-0"></div>
      <div className="w-[495px] h-[510px] border border-[#132622] rounded-br-[200px] absolute rotate-[25deg] top-[-140px] left-[-72px] z-0"></div>
    </div>
  );
};

export default Stock;
