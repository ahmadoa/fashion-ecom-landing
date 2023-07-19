import { useState, useEffect } from "react";
import { sponsorImages } from "../utils/sponsorLogos";
import DiscountIcon from "../assets/discount.png";
import { motion } from "framer-motion";

export const Promotion = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <motion.div
      className="my-7 flex items-center justify-center mx-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-[200%] h-[5.5rem] py-1 border-t border-b border-dashed border-stone-300 overflow-hidden relative">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 gap-5 md:gap-20 animateInvert">
          {Array.from(
            {
              length:
                windowSize[0] <= 500
                  ? 4
                  : windowSize[0] > 500 && windowSize[0] <= 1100
                  ? 8
                  : windowSize[0] > 1100 && windowSize[0] <= 1400
                  ? 8
                  : 14,
            },
            (_, i) => (
              <div className="flex justify-center items-center w-[9rem] gap-2 md:gap-5">
                <img
                  src={DiscountIcon}
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16"
                />
                <div className="font-semibold text-Textprimary text-sm sm:text-base md:text-[2rem] whitespace-nowrap">
                  Discount 20%
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Sponsors = () => {
  return (
    <motion.div
      className="my-7 flex items-center justify-center mx-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-[200%] h-20 md:h-24 md:py-2 border-t border-b border-stone-300 overflow-hidden relative">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-8 sm:gap-5 md:gap-20 animate">
          {sponsorImages.map((i) => {
            return (
              <div className="flex justify-center items-start w-[9rem]">
                <img src={i.img} />
              </div>
            );
          })}
          {sponsorImages.map((i) => {
            return (
              <div className="flex justify-center items-start w-[9rem]">
                <img src={i.img} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
