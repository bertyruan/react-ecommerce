import { useEffect, useState } from "react";

import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = () => {
  const url = "https://cdn.fs.teachablecdn.com/jXxMUj86Qf2pChV37EzI";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(setItems);
  }, []);

  return (
    <div className="directories-container">
      {items.map((item) => (
        <DirectoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Directory;
