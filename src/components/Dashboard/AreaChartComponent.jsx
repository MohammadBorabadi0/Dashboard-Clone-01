import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Data
import { areaChartData } from "../../data/data";

// Icons
import { SlOptionsVertical } from "react-icons/sl";

const AreaChartComponent = () => {
  return (
    <section className="flex flex-col gap-3 pb-2 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between items-center px-3 border-b">
        <div className="p-2 font-bold text-lg">
          <h2>Earning This Month</h2>
        </div>
        <SlOptionsVertical className="cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={areaChartData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 40,
            left: 0,
            bottom: 10,
          }}
        >
          <XAxis style={{ fontSize: "10px" }} dataKey="name" />
          <YAxis style={{ fontSize: "10px" }} />
          <Area type="monotone" dataKey="pv" stroke="#9334EA" fill="#9334EA" />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default AreaChartComponent;
