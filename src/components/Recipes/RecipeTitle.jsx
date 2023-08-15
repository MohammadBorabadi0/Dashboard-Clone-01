const RecipeTitle = ({ recipe }) => {
  return (
    <section className="mt-4">
      <h4 className="my-8">{recipe.name}</h4>
      <span
        className={`flex justify-center p-1 rounded-md ${
          recipe.Difficulty === "Hard"
            ? redBadge
            : recipe.Difficulty === "Medium"
            ? yellowBadge
            : greenBadge
        }`}
      >
        {recipe.Difficulty}
      </span>
    </section>
  );
};

export default RecipeTitle;

// Styles
const redBadge = "text-red-700 bg-red-100";
const yellowBadge = "text-yellow-700 bg-yellow-200";
const greenBadge = "text-green-700 bg-green-200";
