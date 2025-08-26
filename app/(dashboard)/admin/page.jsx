import React from "react";
import CountChart from "../../__Components/CountChart";
import AttendanceChart from "../../__Components/AttendanceChart";
import FinanceChart from "../../__Components/FinanceChart";
import UserCard from "../../__Components/UserCard";
import EventCalendar from "../../__Components/EventCalendar"
import Announcements from "../../__Components/Announcements"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/**LEFT */}
      <div className="w-fit lg:w-2/3 flex flex-col gap-8">
        {/**USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teacher" />
          <UserCard type="parents" />
          <UserCard type="staff" />
        </div>
        {/**MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/**COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/**ATTENDANCE CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/**BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/**RIGHT */}
      <div className="w-fit lg:w-1/3 flex flex-col gap-8">
      <EventCalendar/>
      <Announcements/>
      
      </div>
    </div>
  );
};

export default AdminPage;
