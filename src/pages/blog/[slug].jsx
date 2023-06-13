import PostView from "@/containers/Blog/PostView";
import { groq } from "next-sanity";
import { client } from "@/pages/index.js";

const postsQuery = groq`*[_type == "posts"]`;

export const getStaticPaths = async () => {
  const posts = await client.fetch(postsQuery);

  const paths = posts?.map((item) => {
    return { params: { slug: item?._id } };
  });
  
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? "" };
  const query = `*[_type == "posts" && _id == "${queryParams.slug}"][0]`;
  const post = await client.fetch(query);
  
  return { props: { post } };
};

const Index = ({ post }) => {
  return <PostView post={post} />;
};

Index.layout = true;
export default Index;