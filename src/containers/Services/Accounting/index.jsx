import React, { useState, useEffect } from "react";
import {
  LoadingWrapper
} from "./styles";
import { useRouter } from "next/router";
import { client } from "@/pages/index.js";
import { ThreeDots } from 'react-loader-spinner';
import CompanyCard from "@/components/CompanyCard";

const Accounting = () => {
  const [accounting, setAccounting] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const path = router.query.services;
  console.log('path', path)

  useEffect(() => {
    setIsLoading(true)
    client
      .fetch(
        `*[_type == "accounting"]{
        _id,
        title,
        department,
        image,
        linkedInLink,
        upworkLink,
        overView,
        services,
        companyInformation,
        certificates,
      }`
      )
      .then((item) => {
         setAccounting(item); 
         setIsLoading(false);
      })
      .catch((err) => {
        console.log("error.....<>", err);
      });
  }, []);

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }             

  return (
    <>
      {accounting?.map((acc) => {
        return <CompanyCard acc={acc} />
      })}
    </>
  );
};

export default Accounting;
