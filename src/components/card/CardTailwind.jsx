import React from "react";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="./images/shiba.png"
          alt="Shiba"
          className="block w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className=" flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className=" w-8 h-8 rounded-full object-cover flex-shrink-0"
              src="./images/avt1.png"
              alt="Shiba"
            />
            <span className="font-light text-base text-[#666]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="./icon-heart.svg" alt="256" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className=" text-lg font-bold">Cosmic Perspective</h3>
          {/* <h3 className={`font-bold ${props.fontSize || "text-lg"}`}> */}
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
