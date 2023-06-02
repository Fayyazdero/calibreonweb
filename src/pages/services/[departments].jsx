import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";
import CompanyCard from "@/components/CompanyCard";

const departmentsQuery = groq`*[_type == "departments"]`;

export const getStaticPaths = async () => {
  const res =
    await client.fetch(groq`*[_type == "departments"]`);

  
  const paths = res?.map((department) => {
    let category = department?.department;
    return { params: { departments: String(category).replace(/\s/g, "").toLowerCase()}}
  })
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = {slug: params?.departments ?? ""};

  const departments = await client.fetch(departmentsQuery);
  let department = departments?.filter((d) => {
    return d.department.replace(/\s/g, "").toLowerCase() == queryParams.slug.toLowerCase();
  });

  return {
    props: {
      data: {
        department: department[0],
      },
    },
  };
};

const Index = ({ data }) => {
  return <CompanyCard acc={data?.department} />
  
};

Index.layout = true;
export default Index;
