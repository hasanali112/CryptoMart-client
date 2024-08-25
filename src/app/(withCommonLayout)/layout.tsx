import Footer from "@/component/Ui/Shared/Footer/Footer";
import Navbar from "@/component/Ui/Shared/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
