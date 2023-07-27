import { BiMenu, BiSearch, BiStore } from "react-icons/bi";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import Ceo from "../assets/ceo.jpg";
import { FaCog } from "react-icons/fa";
import { BsShieldExclamation } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";

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
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Header = () => {
  const [open, setopen] = useState(false);

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Announcement text="free shipping until 30 february 2023" />
      <motion.div
        className="w-full px-5 py-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-0"
        variants={item}
      >
        <div className=" flex justify-start items-center">
          <BiMenu size={30} />
        </div>

        <div className="justify-end md:justify-center flex items-center gap-2">
          <img src={Logo} className="h-7 md:h-9" />
          <span className="text-base md:text-xl font-bold">
            <a href="#">Los Zetas</a>
          </span>
        </div>
        <div className="col-span-2 md:col-span-1 justify-end flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <motion.div
              className="flex gap-1 py-1 px-2 rounded-xl bg-white"
              key={open}
              variants={variants}
              animate={open ? "show" : "hide"}
              initial={"hide"}
            >
              <input
                type="text"
                className="bg-white outline-none placeholder:text-sm"
                placeholder="Look for what you want?"
              />
            </motion.div>
            <BiSearch
              className="w-6 h-6 md:h-7 md:w-7"
              onClick={() => {
                setopen((open) => !open);
              }}
            />
          </div>
          <div className="relative">
            <BiStore className="w-6 h-6 md:h-7 md:w-7" />
            <div className="w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0"></div>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <div className="h-10 bg-stone-300 w-[2px] rounded-full"></div>
            <ProfileDropdown />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Announcement = ({ text }) => {
  return (
    text && (
      <motion.div
        className="w-full text-sm text-center py-2 bg-Darkprimary text-white"
        variants={item}
      >
        {text}
      </motion.div>
    )
  );
};

const ProfileDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost p-0 focus:bg-transparent hover:bg-transparent w-fit"
      >
        <img src={Ceo} className="w-10 h-10 rounded-full" alt="profile image" />
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content py-3 gap-2 shadow bg-white rounded-box w-56 mt-1"
      >
        <div className="px-3 flex flex-col">
          <div className="text-darkest font-semibold">Ahmad Ouladaouid</div>
          <div className="text-dark">ouladaouida@gmail.com</div>
        </div>
        <div className="px-3 divider my-1"></div>
        <div className="flex flex-col">
          <button className="flex flex-row items-center px-3 py-2 text-darkest font-medium hover:bg-lighter_gray transition-all duration-300">
            <FaCog size={25} className="mr-3 fill-dark" />
            Profile settings
          </button>
          <button className="flex flex-row items-center px-3 py-2 text-darkest font-medium hover:bg-lighter_gray transition-all duration-300">
            <BsShieldExclamation size={25} className="mr-3 fill-dark" />
            Our policies
          </button>
        </div>
        <div className="px-3 divider my-1"></div>
        <div className="flex flex-row items-center px-3 py-1 text-darkest font-medium cursor-pointer hover:bg-lighter_gray transition-all duration-300">
          <RiLogoutBoxRFill size={25} className="mr-3 fill-dark" />
          Log out
        </div>
      </ul>
    </div>
  );
};

export const variants = {
  show: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    x: 20,
    opacity: 0,
    display: "none",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export default Header;
