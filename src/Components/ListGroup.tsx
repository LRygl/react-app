import { Fragment, useState } from "react";
//import { MouseEvent } from "react";
import "./ListGroup.scss";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const noDataReturnedFromServer = items.length === 0 && <p>No Items Found</p>;

  return (
    <Fragment>
      <h1>{heading}</h1>
      {noDataReturnedFromServer}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
