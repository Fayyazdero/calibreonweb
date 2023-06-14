import Departments from "@/containers/Departments";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from 'react';

const departmentQuery = groq`*[_type == "department"]`;

const personQuery = groq`*[_type == "employee"]{
    _id,
    name,
    image,
    designation,
    description,
    department[]->{title},
  }`

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

export const getStaticProps = async () => {
    const departments = await client.fetch(departmentQuery)
    const persons = await client.fetch(personQuery)
    const categorizedUsers = getUsersByCategory(persons);

    return { props: { departments, categorizedUsers }}
}

const Index = ({ departments, categorizedUsers }) => {
    return ( <Departments departments={departments} categorizedUsers={categorizedUsers} /> );
}
 
Index.layout = true;
export default Index;