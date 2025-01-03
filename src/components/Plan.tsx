import React from "react";

interface Plans {
  type: string;
  amount: string;
  className?: string;
}
//
const Subscriptions: React.FC<Plans> = ({ type, amount, className }) => {
  return (
    <div className="border-2 border-red-400 border-dotted w-[25rem] h-[28rem] rounded-xl">
      <div className="flex flex-col justify-center items-center text-center py-12 ">
        <div
          className={`w-[7rem] h-[6.8rem] clip-path-hexagon flex justify-center items-center ${className}`}
        >
          <h1 className="text-center font-bold">{type}</h1>
        </div>

        <div className="mt-5 font-bold mx-6 ">
          <h1 className="text-[2rem] ">{amount}</h1>
          <p className="text-gray-400 my-4">
            Lorem ipsum dolor sit am consetetur sadi aliquyam erat sed diam
            voluptua vero eos accusam et justo duo dolores
          </p>
          <button className={`w-[8rem] h-[3rem]   rounded-lg ${className}`}>
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

function Plan() {
  return (
    <section className="bg-[#BFBFF] my-12 font-nunito">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-[#F94F4F]">Pricing Plans</h3>
        <h1 className="w-[13rem] mt-0 font-bold text-3xl">Choose your Plan</h1>
      </div>
      <div className="flex justify-center items-center text-[1rem] mt-10">
        <button className="w-[8rem] h-[3rem] rounded-l-full text-white bg-[#F94F4F] hover:cursor-pointer">
          Monthly
        </button>
        <button className="w-[8rem] h-[3rem] rounded-r-full hover:cursor-pointer bg-[#FBFBFF]">
          Yearly
        </button>
      </div>

      <div className="flex justify-center items-center text-center mt-12 ">
        <div className="grid grid-cols-3 gap-5">
          <Subscriptions
            type="Basic"
            amount="$19.00"
            className="bg-[#FFF1F1]"
          />
          <Subscriptions
            type="Standard"
            amount="$49.00"
            className="bg-[#F94F4F] text-white"
          />
          <Subscriptions
            type="Premium"
            amount="$99.00"
            className="bg-[#FFF1F1]"
          />
        </div>
      </div>
    </section>
  );
}

export default Plan;
