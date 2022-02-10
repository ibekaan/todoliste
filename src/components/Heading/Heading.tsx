import { FC } from "react";

type HeadingProps = {
  children: string;
};

export const Heading: FC<HeadingProps> = (props) => {
  const { children } = props;

  return <h1>{children}</h1>;
};
