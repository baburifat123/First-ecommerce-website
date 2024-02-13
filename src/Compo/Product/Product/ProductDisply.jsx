import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/Context";
import ProductDescription from "./ProductDescription";
import ReletedProduct from "./ReletedProduct";
const ProductDisply = (props) => {
  const { addcartitem } = useContext(ProductContext);
  const { product } = props;
  return (
    <div>
      <div className="product">
        <div className="lefts">
          <div className="left">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>

          <div className="rights overflow-hidden">
            <img className="im" src={product.image} alt="" />
          </div>
        </div>
        <div className="right">
          <h2 className="name">{product.name}</h2>
          <div className="flex gap-2 items-center">
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
            <div>({product.id})</div>
          </div>
          <div className="price">
            <h2 className="text-red-400 text-xl">{product.new_price}$</h2>
            <h1 className="line-through text-slate-500">
              {product.old_price}$
            </h1>
          </div>
          <div className="description">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              velit dolorem aut ratione sunt quae quisquam cumque adipisci,
              aliquam consectetur!
            </h1>
          </div>
          <div className="size">
            <h1 className="mb-5">Select Size</h1>
            <div className="si cursor-pointer">
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>Xl</p>
              <p>XXl</p>
            </div>
          </div>

          <button
            onClick={() => {
              addcartitem(product.id);
            }}
            className="buttonss"
          >
            Add To Cart
          </button>

          <h1>
            Category: <span>{product.category} Qoulityful T-shirt</span>
          </h1>
        </div>
      </div>
      <ProductDescription></ProductDescription>
      <ReletedProduct></ReletedProduct>
    </div>
  );
};

export default ProductDisply;
