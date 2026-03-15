import React from "react";
import useToast from "../Hooks/useToast";
import Toast from "./Toast";
const GridItems = () => {


      const {NotificationComponent,triggerNotification}=useToast('')

  return (
    <div>
        {NotificationComponent}
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <div className=" bg-gray-200 text-black px-4 py-5 font-bold rounded hover:bg-gray-400  active:scale-95 transition-all"
          onClick={()=>triggerNotification({
      type:'success',
      message:'File Added Successfully',
      duration:3000

    })}
          
          >
            Show Success Message
          </div>
          <div className=" bg-gray-200 text-black px-4 py-5 font-bold rounded hover:bg-gray-400  active:scale-95 transition-all"
          onClick={()=>triggerNotification({
      type:'warning',
      message:'You system got Hot',
      duration:3000

    })}
          >
            Show Warning Message
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className=" bg-gray-200 text-black px-4 py-5 font-bold rounded hover:bg-gray-400  active:scale-95 transition-all"
          
          onClick={()=>triggerNotification({
      type:'info',
      message:'You got a Message',
      duration:3000

    })}
          >
            Show Message Toast
          </div>
          <div className=" bg-gray-200 text-black px-4 py-5 font-bold rounded hover:bg-gray-400  active:scale-95 transition-all"
          
          onClick={()=>triggerNotification({
      type:'error',
      message:'You Got Bug',
      duration:3000

    })}
          >
            Show Error Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItems;
