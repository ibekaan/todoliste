import { FC, useState } from "react";

export const ListItem: FC<{ children: string }> = (props) => {
  const { children } = props;
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", listStyle: "none" }}>
      <button onClick={onClick}>Erledigen</button>
      <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {children}
      </li>
    </div>
  );
};
