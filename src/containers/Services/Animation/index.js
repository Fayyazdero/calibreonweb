import React from "react";
import CompanyCard from "@/components/CompanyCard";

const Animation = ({ animation }) => {

  return (
    <>
      {animation?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default Animation;
