import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-transparent">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#071b16] text-white border-l-0">
          <SheetHeader>
            <SheetTitle>
              <h1 className="text-2xl font-bold text-white text-left">
                Crypto<span className="text-[#00d094]">Mart</span>
              </h1>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div>
            <ul className="flex flex-col gap-10 text-lg font-semibold mt-10">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/stocks">
                <li>Stock</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>

              <li>Contact Us</li>
            </ul>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className="md:w-[200px] w-[150px] md:mx-auto bg-[#279b7a] text-lg font-semibold mt-10"
              >
                Join Us
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
