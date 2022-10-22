import { useState, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";

// TODO
// - Build a strongly-typed function component called `List` that renders a list of strings
// - The consumer needs pass the list of strings into an `items` prop
// - Above the list should be a search input
// - The input should have focus when the component is first rendered
// - Items in the list that match the search text entered should appear in bold.

interface Props {
  items: string[];
}

const List = ({ items }: Props) => {
  const [criteria, setCriteria] = useState<string>("");
  const elem = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (elem.current) {
      elem.current.focus();
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCriteria(e.currentTarget.value);

  return (
    <>
      <input type="text" value={criteria} onChange={onChange} ref={elem} />
      <ul>
        {Array.isArray(items) &&
          !items.length &&
          items.map((item) => (
            <li
              key={item}
              style={{ fontWeight: item === criteria ? "bold" : "normal" }}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

ReactDOM.render(
  <List items={["Fred", "Bob", "Billy"]} />,
  document.getElementById("root")
);
