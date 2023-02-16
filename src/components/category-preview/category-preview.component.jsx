import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const onTitleClick = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2 className="title" onClick={onTitleClick.bind(this, title)}>
        {title.toUpperCase()}
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
