"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stockData } from "./stockData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StcokTable = () => {
  const getData = stockData();

  return (
    <Table className="text-white">
      <TableHeader>
        <TableRow>
          <TableHead className=" w-[180px] text-slate-400 text-md">
            Symbol
          </TableHead>
          <TableHead className="text-slate-400 text-md">Price</TableHead>
          <TableHead className="text-slate-400 text-md">Change</TableHead>
          <TableHead className=" text-slate-400 text-md">Change %</TableHead>
          <TableHead className=" text-slate-400 text-md">Market Cap</TableHead>
          <TableHead className=" text-slate-400 text-md">Volumn</TableHead>
          <TableHead className=" text-slate-400 text-md">
            Volumn In(24hr)
          </TableHead>
          <TableHead className=" text-slate-400 text-md">
            Circulating Supply
          </TableHead>
          <TableHead className=" text-slate-400 text-md">Buy Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {getData.map((stock, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={stock.image}
                  alt="stock"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#00d094]">
                    {stock.symbol}
                  </span>
                  <span className="text-xs text-gray-500">{stock.name}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">{stock.price}</TableCell>
            <TableCell className="text-[#00d094]">
              {stock.changePercent}
            </TableCell>
            <TableCell>{stock.changePercent}%</TableCell>
            <TableCell>{stock.marketCap}</TableCell>
            <TableCell>{stock.volume}</TableCell>
            <TableCell>{stock.volumeInCurrency24h}</TableCell>
            <TableCell className="text-[#00d094]">
              {stock.volumeInCurrency24h}
            </TableCell>
            <TableCell>
              <Link
                href="https://www.binance.com/en/trading-bots"
                target="_blank"
              >
                <Button className="bg-[#00d094]">Buy Stock</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StcokTable;
