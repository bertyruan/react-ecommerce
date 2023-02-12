import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h1>Shop List</h1>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </>
  );
};

export default Shop;
