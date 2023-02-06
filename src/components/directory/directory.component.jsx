import { useEffect, useState } from "react";

import CategoryItem from "../category-item/category-item.component";

const Directory = () => {
  const url = "https://cdn.fs.teachablecdn.com/jXxMUj86Qf2pChV37EzI";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(setItems);
  }, []);

  return (
    <div className="categories-container">
      {items.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Directory;
