import React, { useEffect, useState } from "react";
import eventBus from "../../utils/eventBus";

function Notification() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showNotification = (data) => {
      setMessage(data.message);
      setTimeout(() => setMessage(""), 3000);
    };

    eventBus.on("notification", showNotification);

    return () => {
      eventBus.off("notification", showNotification);
    };
  }, []);

  if (!message) return null;

  return <div className="notification is-info">{message}</div>;
}

export default Notification;
