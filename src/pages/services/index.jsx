import Services from "@/containers/Services";

import Details from "@/containers/Team/Details";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";

const departmentsQuery = groq`*[_type == "departments"]`;

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.details ?? "" };

  const departments = await client.fetch(departmentsQuery);
  // console.log("queryParams", queryParams);
  // console.log("departments", departments);
  //   const people = persons
  //     ?.filter(
  //       (p) =>
  //         p?.department[0].title == person[0]?.department[0]?.title &&
  //         p?._id !== person[0]?._id
  //     )
  //     ?.slice(0, 3);

  return {
    props: {
      data: {
        departments,
      },
    },
  };
};

const Index = ({ departments }) => {
  return <Services departments={departments} />;
};

Index.layout = true;
export default Index;
