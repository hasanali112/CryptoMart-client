import Image from "next/image";

export interface TExpert {
  name: string;
  rating: number;
  image: string;
  detail: string;
  expert: string;
}

const ExpertCard = ({ expert }: { expert: TExpert }) => {
  return (
    <div className="bg-[#1a2d27] w-[100%] h-[500px] rounded-2xl">
      <Image
        src={expert.image}
        alt="Expert"
        width={400}
        height={400}
        className="w-full h-[270px] rounded-2xl object-cover"
      />
      <div>
        <h1 className="text-white font-semibold text-3xl ml-4 mt-4">
          {expert.name}
        </h1>
        <p className="text-gray-300 ml-4 mt-2">Rating: {expert.rating}</p>
        <h1 className="text-gray-400 text-lg ml-4 mt-2">
          Experties: {expert.expert}
        </h1>
        <p className="text-gray-400 ml-4 mt-3 mr-2">{expert.detail}</p>
        <p className="text-gray-400 ml-4 mt-2 mr-2">
          Contact Info: person@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ExpertCard;
