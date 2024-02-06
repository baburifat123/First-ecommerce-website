const ProductDisply = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div className="product">
      <div className="lefts">
        <div className="left">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="rights">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="text-red-400 font-extrabold text-9xl">{product.name}</h1>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="price">
          <h1>{product.new_price}</h1>
          <h1>{product.old_price}</h1>
        </div>
        <div className="description">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit
            dolorem aut ratione sunt quae quisquam cumque adipisci, aliquam
            consectetur!
          </h1>
        </div>
        <div className="size flex">
          <h1>Select Size</h1>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>Xl</p>
          <p>XXl</p>
        </div>
        <button>Add To Cart</button>
        <h1>{product.category}</h1>
      </div>
    </div>
  );
};

export default ProductDisply;
