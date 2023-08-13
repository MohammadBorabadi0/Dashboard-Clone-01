import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { barChartData } from "../../data/data";
import Title from "../Title";

const BarChartComponent = () => {
  return (
    <section className="flex flex-col gap-3 overflow-hidden justify-between shadow-lg w-full h-80 pb-10 rounded-lg">
      <Title title="Revenue" />
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={barChartData}>
          <Bar dataKey="uv" fill="rgb(147 51 234" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default BarChartComponent;
