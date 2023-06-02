import ViewAll from "@/containers/Team/Department";
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

const getUsersByCategory = (peopleArray) => {
  const categories = {};

  for (const person of peopleArray) {
    const category = person?.department?.[0].title.replace(/\s/g, "").toLowerCase();
    if (categories.hasOwnProperty(category)) {
      categories[category].push(person);
    } else {
      categories[category] = [person];
    }
  }
  const result = Object.entries(categories).map(([category, people]) => ({
    category,
    people,
  }));

  return result;
};

export const getStaticPaths = async () => {
  const persons = await client.fetch(personQuery);

  const categorizedUsers = getUsersByCategory(persons);
  const paths = categorizedUsers?.map((department) => {
    let category = department?.category;
    return { params: { department: category } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.department ?? "" };

  const persons = await client.fetch(personQuery);
  let data = persons?.filter(
    (p) =>
      p.department[0].title.replace(/\s/g, "").toLowerCase() ==
      queryParams.slug.toLowerCase()
  );
  return { props: { persons: data, slug: queryParams.slug } };
};

const Index = ({ persons, slug }) => {
  return <ViewAll persons={persons} slug={slug} />;
};

Index.layout = true;
export default Index;
