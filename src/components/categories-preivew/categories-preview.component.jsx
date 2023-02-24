import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        ></CategoryPreview>
      ))}
    </>
  );
};

export default CategoriesPreview;
