import { products } from "../../mockData/mockData";
import "./Products.css";

const OurProducts = () => {
  return (
    <div className="container products-box">
      <h2 className="heading">Try our other free products</h2>
      <div className="products">
        {products.map((product, index) => (
          <div className="product_card" key={index}>
            <img src={product.image} alt={product.title} />
            <h4 className="heading">{product.title}</h4>
            <p>{product.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
