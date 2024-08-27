import Image from "next/image";

const ServiceCard = ({ data }: any) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm w-[100%] h-[400px] group rounded-xl border border-transparent  pt-10 hover:border hover:border-[#00d094] hover:-translate-y-2 duration-500 cursor-pointer">
      <div className="bg-[#00150f] rounded-full w-[100px] h-[100px] flex justify-center items-center mx-auto">
        <Image src={data.image} alt="Service Image" width={50} height={50} />
      </div>
      <div className="">
        <h1 className="text-white text-2xl font-bold text-center mt-4 group-hover:text-[#00d094]">
          {data.title}
        </h1>
        <p className="text-gray-400 w-[90%] mx-auto text-center mt-4">
          {data.description.slice(0, 200)}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
