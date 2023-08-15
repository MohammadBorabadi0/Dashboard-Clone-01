import { useStateContext } from "../../context/StateProvider";

const RecipeDetails = ({ recipe }) => {
  const { isOpen } = useStateContext();

  return (
    <section className="flex justify-between w-full mt-6 px-12">
      <p className="flex flex-col items-center gap-3 pr-2">
        <span className="text-2xl font-secondary">
          {recipe["Cooking Time"].split(" ")[0]}
        </span>
        <span>Min</span>
      </p>
      <p className="flex flex-col items-center gap-3 border-x-2 px-4 md:px-5 lg:px-8">
        <span className="text-2xl font-secondary">{recipe.calories}</span>
        <span>Kcal</span>
      </p>
      <p className="flex flex-col items-center gap-3 mt-2 pl-2">
        <span>{recipe.Cuisine}</span>
        <span>Cuisine</span>
      </p>
    </section>
  );
};

export default RecipeDetails;
