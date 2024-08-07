
import { NavBar } from "../../components/NavBar/NavBar";
import { HeroSection } from "../../components/Hero/Hero";
import { Order } from "../../components/Order/Order";
import { Service } from "../../components/Service/Service";
import { Offer } from "../../components/Offer/Offer";
import { Product } from "../../components/Product/Product";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { About } from "../../components/About/About";

export const Home = () => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/nextpixie/image/upload/v1722595519/2147767415_amo6rq.jpg";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <div
          className="px-4 lg:px-10 max-w-[1500px] m-auto relative z-10"
          style={{
            zIndex: 1,
          }}
        >
          <NavBar />
          <HeroSection />
        </div>
      </div>

      <Order />
      <About />
      <Service />
      <Offer />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};
