import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";
import CompanyCard from "@/components/CompanyCard";
import Head from "next/head";

const departmentsQuery = groq`*[_type == "departments"]`;
const personQuery = groq`*[_type == "employee"]{
  _id,
  name,
  image,
  designation,
  description,
  department[]->{title},
  isCertified,
  upworkLink,
  skills[]->{title, skillLevel},
  experience[]->{workedAt, duration},
}`;

export const getStaticPaths = async () => {
  const res = await client.fetch(groq`*[_type == "departments"]`);

  const paths = res?.map((department) => {
    let category = department[0]?.title;
    return {
      params: {
        departments: String(category).replace(/\s/g, "").toLowerCase(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.departments ?? "" };

  const departments = await client.fetch(departmentsQuery);
  let department = departments?.filter((d) => {
    return (
      d.department[0]?.title.replace(/\s/g, "").toLowerCase() ==
      queryParams.slug.toLowerCase()
    );
  });
  const persons = await client.fetch(personQuery);
  const people = persons
    ?.filter((p) => {
      return (
        p?.department[0].title.replace(/\s/g, "").toLowerCase() ==
        queryParams.slug
      );
    })
    ?.slice(0, 3);

  return {
    props: {
      data: {
        department: department[0],
        people,
      },
    },
  };
};

const Index = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Services - {data.department.department}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CompanyCard acc={data?.department} people={data?.people} />
    </>
  );
};

Index.layout = true;
export default Index;
