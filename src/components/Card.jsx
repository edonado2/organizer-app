import React from "react";
import checkmark from "../assets/check-mark-1.svg";

export const Card = ({ children, title, task, reminder, icon = checkmark }) => {
  return (
    <div className="flex flex-col container m-5 p-6 w-64 h-max text-white hover:bg-violet-100 cursor-pointer rounded-2xl bg-[#7B9E89] shadow-md">
      {/* Icon Section */}
      <div>
        <img className="pb-3.5 w-8 h-8" src={icon} alt="icon" />
      </div>

      {/* Title */}
      <p className="font-semibold text-lg">{title}</p>

      {/* Task & Reminder Section */}
      <div className=" w-fit mt-2">
        <p className="font-normal">
          {task} {reminder && <span className="text-2xl">({reminder})</span>}
          {children}
        </p>
      </div>
    </div>
  );
};

