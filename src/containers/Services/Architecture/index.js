import React from "react";
import CompanyCard from "@/components/CompanyCard";

const Architecture = ({ architecture }) => {         

  return (
    <>
      {architecture?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default Architecture;
