import { Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ title, startAngle, fill, data }) => {
  return (
    <section className="flex flex-col gap-5 items-center rounded-xl bg-white shadow-xl">
      <div className="p-4 w-full">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div>
        <ResponsiveContainer width={220} height={220}>
          <PieChart width={200} height={200}>
            <Pie
              dataKey="value"
              startAngle={startAngle}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={65}
              fill={fill}
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default PieChartComponent;
