import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

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
