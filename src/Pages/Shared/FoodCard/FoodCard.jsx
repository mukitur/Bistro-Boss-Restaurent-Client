const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className=" ">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 p-3 rounded-md">
        {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
