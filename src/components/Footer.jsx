import FooterText from "../assets/footerText.png";
import FooterBg from "../assets/footerBg.jpg";
import Logo from "../assets/logo.svg";
import Up from "../assets/up.png";

const Footer = () => {
  return (
    <div className="mx-3 flex flex-col gap-5">
      <div
        className="h-[40vh] md:h-[85vh] w-full rounded-3xl bg-slate-500 flex flex-col justify-between overflow-hidden bg-cover shadow-3xl"
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}
      >
        <div className="flex-col-reverse flex sm:flex-row justify-between m-5">
          <a
            href="#"
            className="uppercase w-fit h-fit mt-5 sm:mt-0 px-6 py-3 rounded-full text-Yellowsecondary font-semibold bg-Darkprimary"
          >
            Get started
          </a>
          <div className="w-12/12 sm:w-3/12 text-sm text-justify text-stone-200 font-medium">
            join our community of style enthusiasts and gain access to
            execlusive offers, sneak peeks of upcoming collections.
          </div>
        </div>
        <div className="w-full h-fit">
          <img
            src={FooterText}
            className="scale-[1.03] translate-y-3 sm:scale-105 sm:-translate-y-5 md:translate-y-12"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-0 uppercase text-sm sm:text-base font-semibold text-Textprimary">
        <ul className="flex flex-col gap-1">
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
        </ul>
        <ul className="flex flex-col gap-1">
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
        </ul>
        <ul className="flex flex-col gap-1">
          <li className="text-Textlightgray">Contact</li>
          <li>
            <a href="#">0619437468</a>
          </li>
          <li>
            <a href="#">@los.zetas</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li className="text-Textlightgray">Social Media</li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
        <div className="col-span-1 flex justify-start md:justify-end items-center gap-3">
          <img src={Up} className="h-14 md:h-24" />
        </div>
        <div className="flex flex-col gap-1 md:hidden justify-center">
          <div>
            <a href="#">terms & condition</a>
          </div>
          <div>
            <a href="#">privacy policy</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center py-2 border-t border-Textlightgray">
        <div className="justify-start flex items-center gap-2">
          <img src={Logo} className="h-8" />
          <span className="text-lg font-bold">
            <a href="#">Los Zetas</a>
          </span>
        </div>
        <div className="text-Textsecondary flex justify-end md:justify-center uppercase font-medium text-sm">
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
