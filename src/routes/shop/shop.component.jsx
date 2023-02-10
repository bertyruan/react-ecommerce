import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>Shop List</h1>
      {products.map(({ id, name }) => {
        return <div key={id}> {name} </div>;
      })}
    </div>
  );
};

export default Shop;
