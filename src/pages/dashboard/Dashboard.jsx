import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  DateRange,
  Filters,
  LineChart,
  NavBar,
} from "../../components";

const Dashboard = () => {
  const { allData, age, gender, startDate, endDate } = useSelector(
    (state) => state.data
  );

  const filteredData = allData?.filter(
    (obj) =>
      (!age || obj.Age === age) &&
      (!gender || obj.Gender === gender) &&
      (!startDate || (obj.Day >= startDate && obj.Day <= endDate))
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-500 text-center">
      <NavBar title="Dashboard" />
      <div className="flex items-center justify-end flex-wrap">
        <div className="pr-4 md:pr-0">
          <DateRange />
        </div>
        <Filters />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5 mt-10">
        <div className="w-full flex justify-center bg-indigo-100 rounded-md p-6 shadow-md m-auto">
          <BarChart arrData={filteredData} />
        </div>
        <div className="w-full flex justify-center bg-indigo-100 rounded-md p-6 shadow-md m-auto">
          <LineChart arrData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
