import { Circle, Line } from "rc-progress";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [percent_1, setPercent_1] = useState(0);
  const [percent_2, setPercent_2] = useState(0);
  const [percent_3, setPercent_3] = useState(0);
  const [percent_4, setPercent_4] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercent_1(76);
      setPercent_2(80);
      setPercent_3(45);
      setPercent_4(55);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center shadow-lg items-center w-2/3 h-56 relative">
        <Circle
          style={{ width: "70%" }}
          trailColor="transparent"
          strokeColor="#4d7c0f"
          strokeWidth={8}
          percent={percent_1}
        />
        <span className="mt-[30%] absolute top-5 text-xl font-extrabold">
          {percent_1}%
        </span>
      </div>
      <div className="flex justify-center shadow-lg items-center w-2/3 h-56 relative">
        <Circle
          style={{ width: "70%" }}
          trailColor="transparent"
          strokeColor="#dc2626"
          strokeWidth={8}
          percent={percent_2}
        />
        <span className="mt-[30%] absolute top-5 text-xl font-extrabold">
          {percent_2}%
        </span>
      </div>
      <div className="flex justify-center shadow-lg items-center w-2/3 h-56 relative">
        <Circle
          style={{ width: "70%" }}
          trailColor="transparent"
          strokeColor="#f59e0b"
          strokeWidth={8}
          percent={percent_3}
        />
        <span className="mt-[30%] absolute top-5 text-xl font-extrabold">
          {percent_3}%
        </span>
      </div>
      <div className="flex justify-center shadow-lg items-center w-2/3 h-56 relative">
        <Circle
          style={{ width: "70%" }}
          trailColor="transparent"
          strokeColor="#2563eb"
          strokeWidth={8}
          percent={percent_4}
        />
        <span className="mt-[30%] absolute top-5 text-xl font-extrabold">
          {percent_4}%
        </span>
      </div>
    </div>
  );
};

export default Test;
