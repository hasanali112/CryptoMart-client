import ExpertCard, { TExpert } from "./ExpertCard";

const expertData = [
  {
    name: "John Doe",
    rating: 4.5,
    image:
      "https://img.freepik.com/free-photo/businessman-pointing-left-with-index-finger-formal-suit-looking-serious-front-view_176474-84854.jpg?t=st=1725879320~exp=1725882920~hmac=696b1e686aa37b1236a20e7f7b151b82a8203fc5a1360b5199d94ed93d110bd7&w=996",
    detail:
      "John is a software engineer with over 10 years of experience in full-stack development.",
    expert: "Marketing Expert",
  },
  {
    name: "Jane Smith",
    rating: 4.8,
    image:
      "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?t=st=1725879235~exp=1725882835~hmac=80c36c5f7e4c9bd1f4dc1374c593c2c22ae858216dae4ed50f0609175ecb1884&w=996",
    detail:
      "Jane is a data scientist specializing in machine learning and artificial intelligence.",
    expert: "Trading Expert",
  },
  {
    name: "Alice Johnson",
    rating: 4.7,
    image:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?t=st=1725878926~exp=1725882526~hmac=44555928408e8800a8bd2adee0b35c848c2521e04dd304c025198bffc40e1871&w=996",
    detail:
      "Alice is a cybersecurity expert with a focus on network security and ethical hacking.",
    expert: "Market Analizer",
  },
  {
    name: "Bob Brown",
    rating: 4.6,
    image:
      "https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?t=st=1725878924~exp=1725882524~hmac=6c8b596f834e059930d16bc26aa2283e0b483544e4699714965051c412a1c552&w=996",
    detail:
      "Bob is a cloud computing specialist with extensive experience in AWS and Azure.",
    expert: "Stock Expert",
  },
  {
    name: "Charlie Davis",
    rating: 4.9,
    image:
      "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1725878922~exp=1725882522~hmac=a11ae7fdd001efb6a9de739ee3cdf0801ca3b55d51834f7efac951e6eaff40e6&w=996",
    detail:
      "Charlie is a DevOps engineer with a strong background in CI/CD and infrastructure automation.",
    expert: "AI Expert",
  },
  {
    name: "Eve Wilson",
    rating: 4.4,
    image:
      "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1725878116~exp=1725881716~hmac=365df3b9925bca9f261d7313eda4ea83f478eafcb2c59c3d6d8af6b722e5f87d&w=996",
    detail:
      "Eve is a front-end developer with a passion for creating intuitive and responsive user interfaces.",
    expert: "Stock Analyzer",
  },
];

const Expert = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {expertData.map((expert: TExpert, index: number) => (
        <ExpertCard key={index} expert={expert} />
      ))}
    </div>
  );
};

export default Expert;
