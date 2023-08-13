// Components
import { useStateContext } from "../../context/StateProvider";
import CircularProgress from "./CircularProgress";

const Section1 = () => {
  const { isOpen } = useStateContext();

  return (
    <div
      className={`grid grid-cols-1 ${
        isOpen ? "grid-cols-1" : "grid-cols-2"
      } lg:grid-cols-2 xl:grid-cols-4 mt-4 gap-3 mx-2 sm:ml-0`}
    >
      <CircularProgress
        title="Income"
        description="Income This Month"
        qty={2000}
        value={60}
        pathColor='#dc2626'
      />
      <CircularProgress
        title="Costs"
        description="Costs This Month"
        qty={1500}
        value={45}
        pathColor='#6d28d9'
      />
      <CircularProgress
        title="Sales"
        description="Sales This Month"
        qty={1300}
        value={90}
        pathColor='#22c55e'
      />
      <CircularProgress
        title="Salary"
        description="Salary This Month"
        qty={5000}
        value={76}
        pathColor='#f97316'
      />
    </div>
  );
};

export default Section1;
