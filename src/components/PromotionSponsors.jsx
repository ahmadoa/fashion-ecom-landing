import { sponsorImages } from "../utils/sponsorLogos";

export const Promotion = () => {
  return <div>Promotion Component</div>;
};

export const Sponsors = () => {
  return (
    <div className="my-7 flex items-center justify-center mx-3">
      <div className="w-[200%] h-24 py-2 border-t border-b border-stone-300 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-5 md:gap-20 animate">
          {/* 3 */}
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
    </div>
  );
};
