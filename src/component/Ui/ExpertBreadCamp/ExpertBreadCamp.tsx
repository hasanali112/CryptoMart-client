"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const ExpertBreadCamp = () => {
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
            <Link href="/expert" className="text-white font-semibold text-lg">
              Expert
            </Link>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ExpertBreadCamp;
