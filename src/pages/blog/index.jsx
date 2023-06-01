import { Blog } from "@/containers/Blog";
  import { groq } from "next-sanity";
  import React from "react";
  import { client } from "@/pages/index.js";

const postsQuery = groq`*[_type == "posts"]`

export const getStaticProps = async () => {
console.log({a:"asd"})
  const posts = await client.fetch(postsQuery)

  return { props: { posts }}
}

const Index = ({ posts }) => {

  return <Blog posts={posts} />;
};
Index.layout = true;
export default Index;
