import { useState, useEffect } from "react";

function ISTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime(); // set immediately on mount
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return <span>{time}</span>;
}

export default ISTClock;