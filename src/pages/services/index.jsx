import Services from "@/containers/Services";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const servicesQuery = groq`*[_type == "services"]`;

export const getStaticProps = async () => {
  const services = await client.fetch(servicesQuery)
  return { props: { services }}
}

const Index = ({services}) => {
  return <Services services={services} />;
};

Index.layout = true;
export default Index;
