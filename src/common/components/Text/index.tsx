import React from "react";

import { Container } from "./styles";
import { Props } from "./types";

const Text = ({ children, color, size = 14, ...rest }: Props) => {
  return (
    <Container color={color} size={size} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
