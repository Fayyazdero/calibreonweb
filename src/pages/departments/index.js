import Departments from "@/containers/Departments";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";
import React from 'react';

const departmentQuery = groq`*[_type == "department"]`;

const personQuery = groq`*[_type == "person"]{
    _id,
    name,
    image,
    designation,
    description,
    department[]->{title},
  }`

export const getStaticProps = async () => {
    const departments = await client.fetch(departmentQuery)
    const persons = await client.fetch(personQuery)

    return { props: { departments, persons }}
}

const Index = ({ departments, persons }) => {
    return ( <Departments departments={departments} persons={persons} /> );
}
 
Index.layout = true;
export default Index;