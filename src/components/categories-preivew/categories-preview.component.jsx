import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          ></CategoryPreview>
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
