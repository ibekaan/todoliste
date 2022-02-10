import { FC } from "react";
import { ListItem } from "../ListItem/ListItem";

type ListProps = {
  items: string[];
};

export const List: FC<ListProps> = (props: ListProps) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ul>
  );
};
