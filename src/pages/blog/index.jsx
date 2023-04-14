import Layout from "@/components/Layout";
import { Blog } from "@/containers/Blog";
import React from "react";

const Index = () => {
  return <Blog/>
};
Index.getLayout = (page) => <Layout>
  {page}
</Layout>
export default Index;
