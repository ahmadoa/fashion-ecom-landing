import FooterText from "../assets/footerText.png";
import FooterBg from "../assets/footerBg.jpg";
import Logo from "../assets/logo.svg";
import Up from "../assets/up.png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const Footer = () => {
  return (
    <div className="mx-3 flex flex-col gap-5">
      {/* description footer section */}
      <motion.div
        className="h-[35vh] md:h-[85vh] w-full rounded-3xl bg-slate-500 flex flex-col justify-between overflow-hidden bg-cover shadow-3xl"
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className="flex-col-reverse flex sm:flex-row justify-between m-5">
          <a
            href="#"
            className="uppercase w-fit h-fit mt-5 sm:mt-0 px-5 py-2 md:px-6 md:py-3 rounded-full text-Yellowsecondary text-sm md:text-base font-semibold bg-Darkprimary"
          >
            Get started
          </a>
          <div className="w-12/12 sm:w-3/12 text-xs md:text-sm text-justify text-stone-200 font-medium">
            join our community of style enthusiasts and gain access to
            execlusive offers, sneak peeks of upcoming collections.
          </div>
        </div>
        <div className="w-full h-fit">
          <img
            src={FooterText}
            className="scale-[1.03] translate-y-4 sm:scale-105 sm:-translate-y-5 md:translate-y-12"
          />
        </div>
      </motion.div>
      {/*footer nav*/}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-0 uppercase text-xs sm:text-base font-semibold text-Textprimary"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.ul className="flex flex-col gap-1" variants={item}>
          <li className="text-Textlightgray">Product</li>
          <li>
            <a href="#">kids</a>
          </li>
          <li>
            <a href="#">Woman</a>
          </li>
          <li>
            <a href="#">men</a>
          </li>
        </motion.ul>
        <motion.ul className="flex flex-col gap-1" variants={item}>
          <li className="text-Textlightgray">Company</li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">mission</a>
          </li>
          <li>
            <a href="#">Carier</a>
          </li>
        </motion.ul>
        <motion.ul className="flex flex-col gap-1" variants={item}>
          <li className="text-Textlightgray">Contact</li>
          <li>
            <a href="#">0619437468</a>
          </li>
          <li>
            <a href="#">@los.zetas</a>
          </li>
        </motion.ul>
        <motion.ul className="flex flex-col gap-1" variants={item}>
          <li className="text-Textlightgray">Social Media</li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </motion.ul>
        <motion.div
          className="col-span-1 flex justify-start md:justify-end items-center gap-3"
          variants={item}
        >
          <img src={Up} className="h-14 md:h-24" />
        </motion.div>
        <motion.div
          className="flex flex-col gap-1 md:hidden justify-center"
          variants={item}
        >
          <div>
            <a href="#">terms & condition</a>
          </div>
          <div>
            <a href="#">privacy policy</a>
          </div>
        </motion.div>
      </motion.div>
      {/* the rights reserved bottom bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 items-center py-2 border-t border-Textlightgray">
        <div className="justify-start flex items-center gap-2">
          <img src={Logo} className="h-6 md:h-8" />
          <span className="text-base md:text-lg font-bold">
            <a href="#">Los Zetas</a>
          </span>
        </div>
        <div className="text-Textsecondary flex justify-end md:justify-center uppercase font-medium text-xs md:text-sm">
          &copy;2023 reserved
        </div>
        <div className="hidden md:flex md:justify-end gap-3 text-Textprimary uppercase font-semibold text-sm">
          <div>
            <a href="#">terms & condition</a>
          </div>
          <div>
            <a href="#">privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
