import React from "react";
import { Text } from "./styles";

const Typo = ({ className, typoText, width }) => {
  return (
    <Text className={className} width={width}>
      {typoText}
    </Text>
  );
};

export default Typo;
