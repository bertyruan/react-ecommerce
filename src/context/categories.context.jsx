import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };

  useEffect(() => {
    const getData = async () => {
      const data = await getCollectionAndDocuments();
      setCategories(data);
    };
    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
