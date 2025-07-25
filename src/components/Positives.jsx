import React from "react";
import { assurance } from "../data";
import {
  BuildingLibraryIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const iconMap = [
  <BuildingLibraryIcon className="h-24 w-20 text-[#406ce0]" />,
  <TrophyIcon className="h-24 w-20 text-[#406ce0]" />,
  <ShieldCheckIcon className="h-24 w-20 text-[#406ce0]" />,
  <UserIcon className="h-24 w-20 text-[#406ce0]" />,
];

const Positives = () => {
  return (
    <div className="px-6 bg-[#d3e7f2] flex flex-col lg:flex-row items-end">
      <div className="p-6">
        <div className="text-start max-w-3xl mx-auto mb-12">
          <p className="text-[#ef6c00] text-lg font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold mb-4">
            What makes us better than other contract Manufacturer ?
          </h2>
          <p className="text-gray-700">
            On the other hand we denounce with righteous indignation
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          {assurance.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="">
                {item.pic ? <img src={item.pic} alt={"alt"}/> : iconMap[index]}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-black mb-2">
                  {item.main}
                </h2>
                <p className="text-gray-600 text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/d2.png" alt="doctor" width={720} height={600} />
      </div>
    </div>
  );
};

export default Positives;
