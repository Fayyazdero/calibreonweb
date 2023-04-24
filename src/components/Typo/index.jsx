import React from "react";
import { Text } from "./styles";

const Typo = ({ variant, children, ...rest }) => {
  return (
    <Text variant={variant} {...rest}>
      {children}
    </Text>
  );
};

export default Typo;
