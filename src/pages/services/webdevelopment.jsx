import WebDevelopment from "@/containers/Services/WebDevelopment";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const webDevelopmentQuery = groq`*[_type == "webDevelopment"]{
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
  const webDevelopment = await client.fetch(webDevelopmentQuery)

  return { props: { webDevelopment }}
}

const Index = ({ webDevelopment }) => {
  return <WebDevelopment webDevelopment={webDevelopment} />;
};

Index.layout = true;
export default Index;

