import React, { useCallback, useState } from "react";
import Toast from "../component/Toast";

const useToast = () => {
  const [notification, setnotification] = useState(null);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    timer = setnotification(notificationProps);
    setTimeout(() => {
      setnotification(null);
    }, notificationProps.duration);
  },[]) 

  const NotificationComponent = notification ? (
    <div>
      <Toast {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useToast;








// i have a one hooks where i send the data like a text positon and type accorind to the type we will send the color and the icons how cna i do this at a custome hooks i hav to return a one component which is showing and one thing is when we want to showing the toast then we will sned the second function which is showing the taost
