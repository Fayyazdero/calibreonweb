import Animation from "@/containers/Services/Animation";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const animationQuery = groq`*[_type == "animation"]{
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
  const animation = await client.fetch(animationQuery)

  return { props: { animation }}
}

const Index = ({ animation }) => {
  return <Animation animation={animation} />;
};

Index.layout = true;
export default Index;

