import CeoImg from "../assets/ceo.jpg";
import { ImQuotesRight } from "react-icons/im";

const Ceo = () => {
  return (
    <div className="px-3 h-screen sm:h-[55vh] md:h-[85vh] w-full grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2">
      <div
        className="col-span-1 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url(${CeoImg})`,
        }}
      />
      <div className="flex flex-col justify-between p-10 md:p-14 col-span-1 bg-Darkprimary rounded-3xl text-white">
        <div className="flex flex-col gap-5">
          <ImQuotesRight className="h-10w-10 md:h-16 md:w-16 fill-Yellowsecondary" />
          <div className="text-lg sm:text-xl md:text-[2.5rem] font-medium leading-normal md:leading-[3rem]">
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
      </div>
    </div>
  );
};

export default Ceo;
