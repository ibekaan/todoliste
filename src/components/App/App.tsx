import { FC } from "react";
import { Heading } from "../Heading/Heading";
import { List } from "../List/List";

export const App = () => {
  const todolistItems = ["Todo #1", "Todo #2", "Todo #3", "Todo #4"];

  return (
    <div>
      <Heading>Todoliste</Heading>
      <List items={todolistItems} />
    </div>
  );
};
