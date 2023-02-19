import {
  BackgroundImage,
  DirectoryBodyContainer,
  DirectoryContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ item }) => {
  const { imageUrl, title } = item;
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
