import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./styles";

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);
export default Layout;
