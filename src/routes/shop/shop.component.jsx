import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../../components/categories-preivew/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  setCategories,
} from "../../store/categories/categories.reducer";
import { getCollectionAndDocuments } from "../../utils/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
