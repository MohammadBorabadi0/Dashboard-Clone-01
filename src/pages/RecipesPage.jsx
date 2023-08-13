import Layout from "../Layout/Layout";
import Nav from "../components/Recipes/Nav";
import Recipes from "../components/Recipes/Recipes";
import TopSection from "../components/Recipes/TopSection";

// Context
import { useStateContext } from "../context/StateProvider";

const RecipesPage = () => {
  const { ref } = useStateContext();
  return (
    <Layout>
      <main
        className={`bg-white text-xl font-semibold ml-2 sm:ml-0 mr-2 min-h-screen rounded-xl p-8 ${
          ref ? "mt-24" : "mt-3"
        }`}
      >
        <Nav />
        <TopSection />
        <Recipes />
      </main>
    </Layout>
  );
};

export default RecipesPage;
