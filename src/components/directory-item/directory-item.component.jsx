import {
  BackgroundImage,
  DirectoryBodyContainer,
  DirectoryContainer,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ item }) => {
  const { imageUrl, title, route } = item;
  const navigate = useNavigate();
  const onNavigate = () => navigate(route);

  return (
    <DirectoryContainer onClick={onNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
