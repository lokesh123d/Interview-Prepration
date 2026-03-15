import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { PiWarningOctagonFill } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const icons = {
  success: {icon:<FaCheckCircle />,color:'bg-green-500'},
  error: {icon:<BiSolidError />,color:'bg-red-500'},
  warning:{icon: <PiWarningOctagonFill />,color:'bg-yellow-500'},
  info: {icon:<FaMessage />,color:'bg-blue-500'},
};


const positions={
    'top-right':'top-0 right-0',
    'top-left':'top-0 left-0',
    'bottom-left':'bottom-0 left-0',
    'bottom-right':'bottom-0 right-0'
}

const Toast = ({ type = "info", message, position = "top-left", onClose = () => {} }) => {
  const positionClass = positions[position] ?? positions["top-left"];
  return (
    <div className={`flex rounded px-4 py-5 justify-between items-center gap-4 text-2xl absolute ${positionClass} ${icons[type].color}`}>
      {icons[type].icon}
      {message}
      <IoMdClose  className="cursor-pointer"
      onClick={()=>onClose()}
      />
    </div>
  );
};

export default Toast;
