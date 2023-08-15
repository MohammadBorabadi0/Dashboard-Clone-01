import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import RecipeDetails from "./RecipeDetails";
import RecipeFooter from "./RecipeFooter";
import RecipeRating from "./RecipeRating";

const SingleRecipe = ({ recipe }) => {
  return (
    <section className="flex flex-col items-center justify-between gap-y-6 min-w-[220px] min-h-[350px] bg-stone-100 rounded-xl mt-10">
      <RecipeImage recipe={recipe} />
      <RecipeTitle recipe={recipe} />
      <RecipeDetails recipe={recipe} />
      <RecipeRating recipe={recipe} />
      <RecipeFooter />
    </section>
  );
};

export default SingleRecipe;
