import React from "react";
import CompanyCard from "@/components/CompanyCard";

const Accounting = ({ accounting }) => {

  return (
    <>
      {accounting?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default Accounting;
