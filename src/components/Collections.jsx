import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Amelia from "../assets/Amelia.jpeg";
import Misho from "../assets/Misho.jpeg";
import Nai from "../assets/naiii.jpeg";
import Yoosef from "../assets/Yoosef.jpeg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      type: "tween",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 70 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
};

const Collections = () => {
  return (
    <div className="flex flex-col">
      <motion.div
        className="flex justify-center gap-3 md:gap-10 mx-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className="text-Darkprimary text-xl md:text-8xl font-bold">
          Be Bold, <br />
          Be Confident
        </div>
        <BsArrowDownShort
          size={150}
          className="-rotate-[35deg] w-fit translate-y-2 md:translate-y-20 h-10 md:h-40"
        />
      </motion.div>
      <motion.div
        className="md:h-[90vh] grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-10 relative"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <Card
          collection="Jaket Invo"
          name="misho"
          link="#"
          image={Misho}
          self="start"
        />
        <Card
          collection="Blekmetal Style"
          name="nailea"
          link="#"
          image={Nai}
          self="center"
        />
        <Card
          collection="Cewe Mamba"
          name="yousef"
          link="#"
          image={Yoosef}
          self="end"
        />
        <Card
          collection="Cogan Ireng"
          name="amelia"
          link="#"
          image={Amelia}
          self="start"
        />
        <div className="h-fit text-sm md:text-base text-Textsecondary absolute -bottom-24 md:-bottom-28 md:top-0 md:left-1/2 md:-translate-x-1/2">
          join our community of style enthusiasts and gain access to execlusive
          offers, sneak peeks of upcoming collections, and personalized fashion
          recommendations.
        </div>
      </motion.div>
    </div>
  );
};

const Card = ({ collection, name, link, image, self }) => {
  return (
    <motion.div
      className={`h-56 md:h-[26rem] col-span-1 rounded-2xl flex flex-col justify-between bg-cover bg-center relative`}
      style={{
        backgroundImage: `url(${image})`,
        alignSelf: `${self}`,
      }}
      variants={item}
    >
      <a
        href={link}
        className="flex w-fit self-end rounded-bl-3xl bg-background relative"
      >
        <motion.div className="rounded-full p-2 md:p-3 border border-Darkprimary hover:border-Yellowsecondary hover:bg-Yellowsecondary transition-all duration-300 w-fit ml-3 mb-3">
          <BsArrowUpShort className="w-8 h-8 md:w-10 md:h-10 rotate-45" />
        </motion.div>
        <div className="absolute -left-5 shadow-5xl rounded-full w-5 h-5 bg-transparent"></div>
        <div className="absolute right-0 -bottom-5 shadow-5xl rounded-full w-5 h-5 bg-transparent"></div>
      </a>
      <div className="flex flex-col gap-1 px-4 py-5">
        <div className="text-sm md:text-base font-bold py-1 px-3 bg-white rounded-2xl w-fit">
          {name}
        </div>
        <div className="text-base md:text-2xl text-background font-medium">
          {collection}
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
