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
    fill: "#8884d8",
  },
  
  {
    name: "Boys",
    count: 50,
    fill: "#83a6ed",
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
      <div className="w-full h-[75%]">
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
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
           
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/**BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-green-600 rounded-full"></div>
          <h1 className="font-black">5345</h1>
          <h2 className="text-gray-500 text-xs">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#E5B80B] rounded-full"></div>
          <h1 className="font-black">5345</h1>
          <h2 className="text-gray-500 text-xs">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
