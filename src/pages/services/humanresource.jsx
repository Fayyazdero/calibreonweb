import HumanResource from "@/containers/Services/HumanResource";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const humanResourceQuery = groq`*[_type == "humanResource"]{
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
  const humanResource = await client.fetch(humanResourceQuery)

  return { props: { humanResource }}
}

const Index = ({ humanResource }) => {
  return <HumanResource humanResource={humanResource} />;
};

Index.layout = true;
export default Index;

