import React from "react";
import CompanyCard from "@/components/CompanyCard";

const WebDevelopment = ({ webDevelopment }) => {

  return (
    <>
      {webDevelopment?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default WebDevelopment;
