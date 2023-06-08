import Details from "@/containers/Departments/Details";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";

const personQuery = groq`*[_type == "person"]{
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
  const persons = await client.fetch(personQuery);
  const paths = persons?.map((person) => {
    let id = person?._id;
    return { params: { details: id } };
  });

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.details ?? "" };
  
  const persons = await client.fetch(personQuery);
  const user = persons?.filter((user) => user._id == queryParams?.slug);
  const people = persons
    ?.filter((p) => {
      return (
        p?.department[0].title == user[0]?.department[0]?.title &&
        p?._id !== user[0]?._id
      );
    })
    ?.slice(0, 3);

  return {
    props: {
      data: {
        person: user,
        people,
      },
    },
  };
};

const Index = ({ data }) => {
  return <Details person={data?.person?.[0]} people={data?.people} />;
};

Index.layout = true;
export default Index;
