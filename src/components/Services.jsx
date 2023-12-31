import { BsArrowUpShort } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import service_1 from "../assets/service_1.jpg";
import service_2 from "../assets/service-2.png";
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

const Services = () => {
  return (
    <motion.div
      className="h-[80vh] mt-24 md:mt-0 mx-3 grid grid-cols-1 md:grid-cols-3 gap-3"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <Card
        info="Shopping with us is not just about finding the perfect outfit, it's an experience."
        link="#"
        self="end"
        image={service_2}
      />
      <div className="col-span-1 grid grid-rows-1 grid-cols-2 md:grid-rows-2 md:grid-cols-1 gap-3">
        <motion.div className="flex flex-col col-span-1 justify-between bg-Yellowsecondary rounded-3xl p-3 md:p-5">
          <img src={Logo} className="h-10 self-start" />
          <div className="flex flex-col gap-2" variants={item}>
            <div className="w-fit py-2 text-xs md:text-base px-4 bg-white rounded-3xl font-bold">
              Los Zetas.com
            </div>
            <div className="font-bold text-sm sm:text-lg md:text-3xl ">
              Experience Fashion <br />
              Excellence Today!
            </div>
          </div>
        </motion.div>
        <div className="col-span-1">
          <Card
            info="We have the perfect pieces to make a statement."
            link="#"
            self="start"
            image={service_1}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({ info, link, image, self }) => {
  return (
    <motion.div
      className={`h-full w-full bg-slate-500 rounded-2xl flex flex-col justify-between bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`,
        alignSelf: `${self}`,
        gridColumn: "1/3",
      }}
      variants={item}
    >
      <a
        href={link}
        className="flex w-fit self-end rounded-bl-3xl bg-background relative"
      >
        <div className="rounded-full p-2 md:p-3 border border-Darkprimary hover:border-Yellowsecondary hover:bg-Yellowsecondary transition-all duration-300 w-fit ml-3 mb-3">
          <BsArrowUpShort className="w-8 h-8 md:w-10 md:h-10 rotate-45" />
        </div>
        <div className="absolute -left-5 shadow-5xl rounded-full w-5 h-5 bg-transparent"></div>
        <div className="absolute right-0 -bottom-5 shadow-5xl rounded-full w-5 h-5 bg-transparent"></div>
      </a>
      <div
        className="flex flex-col gap-1 pl-5 pr-3 py-7 w-full md:w-[60%]"
        style={{ alignSelf: `${self}` }}
      >
        <div className="text-sm md:text-base text-background font-normal">
          {info}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
