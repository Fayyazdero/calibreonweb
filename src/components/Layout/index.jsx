import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import Accounting from "../Accounting";
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
    <Input
      placeholder="Search for Services"
      formBtnText="submit"
      variant="contained"
    />
    {children + " Body"}
    {children}
    <Accounting />
    <Footer />
  </div>
);
export default Layout;
