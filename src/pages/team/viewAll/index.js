import ViewAll from "@/containers/Team/ViewAll";
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

export const getStaticProps = async () => {
  const persons = await client.fetch(personQuery)

    return { props: { persons }}
};

const Index = ({ persons }) => {
  return <ViewAll persons={persons} />;
};

Index.layout = true;
export default Index;