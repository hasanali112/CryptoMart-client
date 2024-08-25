import { cn } from "@/lib/uttils";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: TProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[600px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1300px] px-[20px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
