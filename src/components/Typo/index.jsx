import React from "react";
import { Text } from "./styles";

const Typo = ({ className, children, width, ...rest }) => {
  return (
    <Text className={className} width={width} {...rest}>
      {children}
    </Text>
  );
};

export default Typo;
