import Details from "@/containers/Team/Details";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";

const personQuery = groq`*[_type == "person" && slug.current == $slug][0]{
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
  slug
}`;

export const getStaticPaths = async () => {
  const paths =
    await client.fetch(groq`*[_type == "person" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`);
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? "" };

  const person = await client.fetch(personQuery, queryParams);
  const persons = await client.fetch(personQuery);

  const people = persons
    ?.filter(
      (p) =>
        p?.department[0].title == person[0]?.department[0]?.title &&
        p?._id !== person[0]?._id
    )
    ?.slice(0, 3);
    console.log('params', params)
    // console.log('people', people)

  return {
    props: {
      data: {
        person,
        people
      },
    },
  };
};

const Index = ({ data }) => {
  return <Details person={data?.person} people={data?.people} />;
};

Index.layout = true;
export default Index;
