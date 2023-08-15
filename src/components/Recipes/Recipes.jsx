import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fake-recipes-api.onrender.com/recipes")
        .then((res) => {
          setRecipes(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [recipes, loading]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full mt-20">
          <img src="./img/icons/Infinity.svg" />
        </div>
      ) : (
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14 mx-auto mt-20 text-sm">
          {recipes.map((item) => (
            <section
              key={item.id}
              className="flex flex-col justify-between min-w-[200px] min-h-[350px] max-w-full bg-red-50 rounded-xl mt-10"
            >
              <div className="flex justify-center transform -translate-y-16">
                <img
                  src={item.image}
                  className="absolute top-10 flex justify-center w-16 h-16 object-cover rounded-full bg-white overflow-hidden"
                />
              </div>
              <section className="flex flex-col gap-8 items-center my-6">
                <h4 className="text-xl">{item.name}</h4>
                <div>
                  <span
                    className={
                      item.Difficulty === "Easy"
                        ? "bg-green-200 text-green-600 px-2 py-[2px] rounded-md"
                        : item.Difficulty === "Medium"
                        ? "bg-yellow-200 text-yellow-600 px-2 py-[2px] rounded-md"
                        : "bg-red-200 text-red-600 px-2 py-[2px] rounded-md"
                    }
                  >
                    {item.Difficulty}
                  </span>
                </div>
              </section>
              <div className="flex justify-around mt-6 text-xs px-4">
                <p className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-secondary">
                    {item["Cooking Time"].split(" ")[0]}
                  </span>
                  <span>Min</span>
                </p>
                <p className="flex flex-col items-center gap-2 border-x px-8">
                  <span className="text-2xl font-secondary">{item.calories}</span>
                  <span>Kcal</span>
                </p>
                <p className="flex flex-col items-center gap-2">
                  <span className="text-sm mt-1">{item.Cuisine}</span>
                  <span>Cuisine</span>
                </p>
              </div>
              <div className="flex justify-center items-center py-3 bg-red-600 text-white rounded-b-xl">
                <button className="w-full">Start Cooking</button>
              </div>
            </section>
          ))}
        </main>
      )}
    </>
  );
};

export default Recipes;
