import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Accounting from "../Accounting";
import ProfileCard from "../ProfileCard";
import TestimonialCard from "../TestimonialCard";
import BlogCard from "../BlogCard";
import InformationCard from "../InformationCard";
import ContactForm from "../ContactForm";
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
    {children}
    <Footer />
  </div>
);
export default Layout;
