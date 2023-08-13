import Layout from "../Layout/Layout";

// Context
import { useStateContext } from "../context/StateProvider";

const AnalyticsPage = () => {
  const { ref } = useStateContext();
  return (
    <Layout>
      <main
        className={`bg-white text-xl font-semibold ml-2 sm:ml-0 mr-2 min-h-screen rounded-xl p-8 ${
          ref ? "mt-24" : "mt-3"
        }`}
      >
        AnalyticsPage
      </main>
    </Layout>
  );
};

export default AnalyticsPage;
