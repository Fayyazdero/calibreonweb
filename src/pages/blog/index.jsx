import { Blog } from "@/containers/Blog";
import React from "react";

const postsQuery = groq`*[_type == "posts"]`

export const getStaticProps = async () => {
  const posts = await client.fetch(postsQuery)

  return { props: { posts }}
}

const Index = ({ posts }) => {
  return <Blog posts={posts} />;
};
Index.layout = true;
export default Index;
