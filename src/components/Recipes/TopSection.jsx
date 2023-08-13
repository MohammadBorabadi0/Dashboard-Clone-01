

const TopSection = () => {
  return (
    <section className="flex items-center justify-between mt-10">
    <div className="flex items-center gap-6">
      <img src="./img/icons/chicken.svg" className="w-24" />
      <div className="flex flex-col items-center gap-3 pt-2">
        <h4 className="flex text-3xl gap-1 text-slate-700 font-secondary">
          Only the best recipes<span className="text-red-600">!</span>
        </h4>
        <span className="text-sm text-slate-500">
          Today's new recipes for you
        </span>
      </div>
    </div>
    <div className="flex gap-2">
      <div className="flex flex-col gap-4 justify-center items-center border-r pr-3 font-primary">
        <span className="font-secondary">1<span className="text-2xl">45</span></span>
        <span>Tutorials</span>
      </div> 
      <div className="flex flex-col gap-4 justify-center items-center font-primary pl-1">
        <span className="text-2xl font-secondary">3<span className="text-base">0</span>2</span>
        <span>Recipes</span>
      </div>
    </div>
  </section>
  )
}

export default TopSection