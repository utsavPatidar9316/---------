import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <Image
      src="/images/noNotification.jpg"
      alt="no notification"
      width={500}
      height={1000}
    />
  );
};

export default Notification;
