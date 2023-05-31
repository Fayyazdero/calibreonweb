import React from "react";
import CompanyCard from "@/components/CompanyCard";

const FilmAndTv = ({ filmAndTv }) => {

  return (
    <>
      {filmAndTv?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default FilmAndTv;
