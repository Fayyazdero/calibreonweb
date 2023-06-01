// import Departments from "@/containers/Services/Departments/Departments";
import Departments from "@/containers/Services/Departments";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";
import CompanyCard from "@/components/CompanyCard";

const departmentsQuery = groq`*[_type == "departments"]`;

export const getStaticPaths = async () => {
  const paths =
    await client.fetch(groq`*[_type == "departments" && defined(slug.current)][]{
    "params": { "slug": slug.current },
  }`);
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = {slug: params?.departments ?? ""};

  const departments = await client.fetch(departmentsQuery);
  let department = departments?.filter((d) => d.department.replace(/\s/g, "").toLowerCase() == queryParams.slug.toLowerCase());

  // console.log('department', department);
  return {
    props: {
      department
    },
  };
};

const Index = ({ department }) => {
  return <CompanyCard acc={department?.[0]} />
  
};

Index.layout = true;
export default Index;
