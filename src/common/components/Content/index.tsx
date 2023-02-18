import React from "react";

import { Container } from "./styles";
import { ContentProps } from "./types";

const Content = ({ children }: ContentProps) => {
  return <Container>{children}</Container>;
};

export default Content;
