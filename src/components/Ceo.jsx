import CeoImg from "../assets/ceo.jpg";
import { ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Ceo = () => {
  return (
    <motion.div
      className="px-3 h-screen sm:h-[55vh] md:h-[85vh] w-full grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className="col-span-1 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url(${CeoImg})`,
        }}
        variants={item}
      />
      <motion.div
        className="flex flex-col justify-between p-10 md:p-14 col-span-1 bg-Darkprimary rounded-3xl text-white"
        variants={item}
      >
        <div className="flex flex-col gap-5">
          <ImQuotesRight className="h-10w-10 md:h-16 md:w-16 fill-Yellowsecondary" />
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] font-medium leading-normal md:leading-[3rem]">
            "Fashion is about dressing <br />
            according to what's <br />
            fashionable. Style is more <br />
            about being yourself."
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-lg font-medium">Panglima Bagas</div>
          <div className="text-sm text-Textlightgray font-medium">
            CEO of Los Zetas
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ceo;
