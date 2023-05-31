import Architecture from "@/containers/Services/Architecture";
import React from "react";

import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const architectureQuery = groq`*[_type == "architecture"]{
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
  const architecture = await client.fetch(architectureQuery)

  return { props: { architecture }}
}

const Index = ({ architecture }) => {
  return <Architecture architecture={architecture} />;
};

Index.layout = true;
export default Index;

