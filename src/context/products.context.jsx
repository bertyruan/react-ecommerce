import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    fetch("https://cdn.fs.teachablecdn.com/AWn9jvxASniTpQX1UNyF")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
