import Details from "@/containers/Departments/Details";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from "react";

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
  const persons = await client.fetch(personQuery);
  const paths = persons?.map((person) => {
    let id = person?._id;
    return { params: { details: id } };
  });

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.details ?? "" };

  const newPersonQuery = groq`*[_type == "employee" && _id == $slug]{
    _id,
    name,
    image,
    designation,
    description,
    department,
    isCertified,
    upworkLink,
    skills[]->{title, skillLevel},
    experience[]->{workedAt, duration},
  }`;
  
  const employee = await client.fetch(newPersonQuery, { slug: queryParams.slug });
  const user = employee[0];

  const peopleQuery = groq`*[_type == "employee" && department[0]._ref == $departmentRef && _id != $userId]{
    _id,
    name,
    image,
    designation,
    description,
    department,
    isCertified,
    upworkLink,
    skills[]->{title, skillLevel},
    experience[]->{workedAt, duration},
  }[0...3]`;
  
  const people = await client.fetch(peopleQuery, {
    departmentRef: user?.department?.[0]?._ref,
    userId: user?._id,
  });

  const personQueryWithTitle = groq`*[_type == "employee" && _id == $slug]{
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
  
  const personWithTitle = await client.fetch(personQueryWithTitle, { slug: queryParams.slug });
  const person = personWithTitle[0];

  return {
    props: {
      data: {
        person,
        people,
      },
    },
  };
};

const Index = ({ data }) => {
  return <Details person={data?.person} people={data?.people} />;
};

Index.layout = true;
export default Index;
