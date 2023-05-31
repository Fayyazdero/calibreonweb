import Accounting from "@/containers/Services/Accounting";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const accountingQuery = groq`*[_type == "accounting"]{
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

export const getStaticProps = async () => {
  const accounting = await client.fetch(accountingQuery)

  return { props: { accounting }}
}

const Index = ({ accounting }) => {
  return <Accounting accounting={accounting} />;
};

Index.layout = true;
export default Index;

