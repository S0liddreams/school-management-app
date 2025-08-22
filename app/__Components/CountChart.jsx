"use client";

import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [

    {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#f620fd",
  },
  
  {
    name: "Boys",
    count: 50,
    fill: "#044078",
  },
];

const CountChart = () => {
  return (
    <div className=" bg-[#99d5f5] rounded-xl w-full h-full p-4">
      {/**TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/dots.png" alt="alt" width={20} height={20} />
      </div>
      {/**CHARTS */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              
              background
              dataKey="count"
            />
           
          </RadialBarChart>
        </ResponsiveContainer>
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/boyandgirl.png" alt="alt" width={50} height={50} />
      </div>
      {/**BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#044078] rounded-full"></div>
          <h1 className="font-black">5345</h1>
          <h2 className="text-gray-500 text-xs">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#f620fd] rounded-full"></div>
          <h1 className="font-black">5345</h1>
          <h2 className="text-gray-500 text-xs">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
