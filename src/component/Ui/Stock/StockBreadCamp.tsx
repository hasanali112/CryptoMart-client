"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const StockBreadCamp = () => {
  return (
    <Breadcrumb className="mt-10 ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/" className="text-white font-semibold text-lg">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-white font-semibold text-xl" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white font-semibold text-lg">
            <Link href="/stocks" className="text-white font-semibold text-lg">
              Stocks
            </Link>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default StockBreadCamp;
