// Components 
import Star from "./Star";

const RecipeRating = ({ recipe }) => {
  return (
    <section className="my-6 text-xl">
      <Star star={recipe.rating} />
    </section>
  );
};

export default RecipeRating;
