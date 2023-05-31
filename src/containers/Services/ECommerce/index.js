import React from "react";
import CompanyCard from "@/components/CompanyCard";

const ECommerce = ({ eCommerce }) => {
  return (
    <>
      {eCommerce?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default ECommerce;
