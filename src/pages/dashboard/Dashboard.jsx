import React from "react";
import { useSelector } from "react-redux";
import { NavBar } from "../../components";

const Dashboard = () => {
  const data = useSelector((state) => state.data);
  console.log(data.allData);
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-500 text-center">
      <NavBar title="Dashboard" />
    </div>
  );
};

export default Dashboard;
