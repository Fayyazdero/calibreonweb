import ECommerce from "@/containers/Services/ECommerce";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const eCommerceQuery = groq`*[_type == "eCommerce"]{
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
  const eCommerce = await client.fetch(eCommerceQuery)

  return { props: { eCommerce }}
}

const Index = ({ eCommerce }) => {
  return <ECommerce eCommerce={eCommerce} />;
};

Index.layout = true;
export default Index;

