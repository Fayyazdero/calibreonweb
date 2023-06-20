import Services from "@/containers/Services";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import Head from "next/head";

const servicesQuery = groq`*[_type == "services"]`;

export const getStaticProps = async () => {
  const services = await client.fetch(servicesQuery);
  return { props: { services } };
};

const Index = ({ services }) => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Services services={services} />;
    </>
  );
};

Index.layout = true;
export default Index;
