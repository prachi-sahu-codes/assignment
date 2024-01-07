import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutHandler } from "../../store/authStore/action";

const NavBar = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickLogout = () => {
    dispatch(logoutHandler(navigate));
  };
  return (
    <div className="flex justify-between items-center gap-4 p-4">
      <h2 className="text-indigo-900 text-xl md700:text-2xl font-bold underline">
        {title}
      </h2>
      <button
        className="p-1 md700:p-2 bg-indigo-500 rounded-full text-indigo-50 hover:bg-indigo-600"
        title="Logout"
        onClick={() => clickLogout()}
      >
        <RiLogoutCircleRLine className="w-4 h-4 md700:w-5 md700:h-5" />
      </button>
    </div>
  );
};

export default NavBar;
