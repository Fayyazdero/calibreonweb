import FilmAndTv from "@/containers/Services/FilmAndTv";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const filmAndTvQuery = groq`*[_type == "filmAndTv"]{
  _id,
  title,
  department,
  image,
  linkedInLink,
  upworkLink,
  overView,
  services,
  companyInformation,
  certificates,
}`

export const getStaticProps = async () => {
  const filmAndTv = await client.fetch(filmAndTvQuery)

  return { props: { filmAndTv }}
}

const Index = ({ filmAndTv }) => {
  return <FilmAndTv filmAndTv={filmAndTv} />;
};

Index.layout = true;
export default Index;

