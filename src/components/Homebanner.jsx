import React, { useEffect, useState } from "react";
import { imagArray } from "../data";
// import Doctor1 from "../assets/doctor8.jpg";

const Homebanner = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  console.log(`Image`, image);

  return (
    <div className=" bg-cover">
      <div className="  w-full h-full transition-opacity z-0">
        <img
          className={`${
            image === image ? "opacity-100" : "opacity-0"
          } w-full transition-all duration-1000`}
          src={imagArray[image]}
          alt="hero banner"
        />
      </div>
    </div>
  );
};

export default Homebanner;
