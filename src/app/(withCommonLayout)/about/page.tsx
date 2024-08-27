import Image from "next/image";
import about from "@/assets/breadcrumb_bg-1.png";
import Container from "@/component/Ui/Shared/Container";
import CompanyStatic from "@/component/Ui/Home/Company static/CompanyStatic";
import RoadMap from "@/component/Ui/Home/RoadMap/RoadMap";

const About = () => {
  return (
    <div className="bg-[#00150f] relative">
      <Image
        src={about}
        alt="about"
        width={1000}
        height={400}
        className="w-full h-[300px]"
      />
      <Container>
        <h1 className="text-4xl font-bold text-white absolute top-[2%] left-[10%]">
          About
        </h1>
      </Container>
      {/* <Container> */}
      <CompanyStatic />
      <RoadMap />
      {/* </Container> */}
    </div>
  );
};

export default About;
