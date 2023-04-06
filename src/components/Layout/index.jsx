import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import { Heading } from "../Heading";
import Home from "@/pages/home";
import SectionHeading from "../SectionHeading";
const Layout = ({ children }) => (
  <div>
    <Head>
      <title>My App</title>
      <link rel="stylesheet" href="/static/css/style.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
    </Head>

    <Header />
    <Home />
    <SectionHeading secHeadingText={"About Us"} />
    {children + " Body"}
    <Footer />
  </div>
);
export default Layout;
