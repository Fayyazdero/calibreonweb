import React, { useState } from "react";
import { SearchButton, SearchWrapper } from "./styles";
import Input from "../Input";
import Button from "../Button";

const Search = ({
  variant,
  placeholder,
  btnText,
  onSubmit,
  onChange,
  search = "",
  btnPadding = "10px 20px",
}) => {
  const [_search, setSearch] = useState(search);
  const handleChange = (e) => {
    onChange && onChange(e);
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    onSubmit && onSubmit(e);
  };
  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <Input
        placeholder={placeholder}
        value={_search}
        onChange={handleChange}
      />
      <SearchButton variant={variant} padding={btnPadding}>
        {btnText}
      </SearchButton>
    </SearchWrapper>
  );
};

export default Search;
