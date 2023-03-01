import {
  BackgroundImage,
  DirectoryBodyContainer,
  DirectoryContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { DirectoryType } from "../directory/directory.types.js";

type DirectoryItemProp = {
  item: DirectoryType;
};

const DirectoryItem = ({ item }: DirectoryItemProp) => {
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
