import axios from "axios";
import { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";
import InternalServerError from "../../pages/500";
import { useStateContext } from "../../context/StateProvider";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const { isOpen } = useStateContext();

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://fake-recipes-api.onrender.com/recipes")
        .then((res) => setRecipes(res.data))
        .catch(() => setError(true));
    };
    fetchProducts();
  }, [recipes, error]);


  return (
    <>
      {!recipes.length ? (
        <div className="flex justify-center items-center w-full h-96 mt-20">
          <img src="./img/icons/Infinity.svg" />
        </div>
      ) : error ? (
        <InternalServerError />
      ) : (
        <main
          className={`grid grid-cols-1 ${
            isOpen
              ? "sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          } 2xl:grid-cols-4 gap-x-6 gap-y-14 mx-auto my-20 text-sm`}
        >
          {recipes.map((item) => (
            <SingleRecipe key={item.id} recipe={item} />
          ))}
        </main>
      )}
    </>
  );
};

export default Recipes;
