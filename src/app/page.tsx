import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{ minHeight: "85vh" }}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/kesrinandan.png"
          width={400}
          height={400}
          alt="hanuman"
        />
        <h3 className="mt-4">Jay Shree Ram</h3>
      </div>
    </div>
  );
};

export default page;
