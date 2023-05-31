import React from "react";
import CompanyCard from "@/components/CompanyCard";

const HumanResource = ({ humanResource }) => {

  return (
    <>
      {humanResource?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default HumanResource;
