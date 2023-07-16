import { AiFillStar } from "react-icons/ai";
import HeroText from "../assets/heroText.png";

const Hero = () => {
  return (
    <div className="mx-3 h-screen flex flex-col">
      <div className="h-[90vh] flex flex-col justify-between rounded-3xl overflow-hidden bg-hero-bg bg-cover shadow-3xl">
        <div className="flex flex-col sm:flex-row m-5 gap-7 sm:gap-0 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AiFillStar size={20} className="fill-yellow-400" />
              <span className="font-semibold text-white">4.8</span>
            </div>
            <div className="text-white font-medium">
              Discover our exquisite collection of <br /> fashion-forward
              designs that will elevate <br /> your wardrobe to new heights.
            </div>
          </div>
          <a
            href="#"
            className="uppercase w-fit h-fit px-6 py-3 rounded-full text-Yellowsecondary font-semibold bg-Darkprimary"
          >
            Shop now
          </a>
        </div>
        <div className="w-full h-fit">
          <img
            src={HeroText}
            className="scale-[1.03] translate-y-2 sm:scale-105 sm:translate-y-4"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm text-Textprimary font-semibold">2023</span>
        <span className="text-sm uppercase text-Textprimary font-semibold ">
          streetwear
        </span>
      </div>
    </div>
  );
};

export default Hero;
