import { useState } from "react";
import { useStats } from "../store/useStats";
import { item } from "../types/item";

interface initial {
  name: "initial";
}

interface itemProps {
  items: item[];
  selectLabel: string;
}

const ItemSelect: React.FC<itemProps> = ({ items, selectLabel }) => {
  const updateStats = useStats((state) => state.updateStats);
  const [prevItem, setPrevItem] = useState<item | initial>({
    name: "initial",
  });

  const handleItemChange = (e) => {
    // set the newly selected weapon in local state
    const nextItem: item = items.find((item) => item.name === e.target.value);
    setPrevItem(nextItem);

    updateStats(prevItem, nextItem);
  };

  return (
    <>
      <label htmlFor="item" style={{ display: "block" }}>
        {`Select ${selectLabel}`}
      </label>
      <select
        value={prevItem.name}
        onChange={(e) => {
          handleItemChange(e);
        }}
      >
        <option value="initial" disabled>
          ---
        </option>
        {items.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ItemSelect;
