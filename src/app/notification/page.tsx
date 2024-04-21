import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "85vh" }}
    >
      <Image
        src="/images/noNotification.jpg"
        alt="no notification"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Notification;
