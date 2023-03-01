import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectory } from "../../store/directory/directory.reducer";
import { selectDirectoryItems } from "../../store/directory/directory.selector";

import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
import { DirectoryType } from "./directory.types";

const Directory = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectDirectoryItems);

  useEffect(() => {
    dispatch(fetchDirectory());
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
