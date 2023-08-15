const RecipeImage = ({ recipe }) => {
  return (
    <section className="absolute transform -translate-y-8">
      <img
        src={recipe.image}
        className="w-16 h-16 object-cover rounded-full bg-red-50"
      />
    </section>
  );
};

export default RecipeImage;
