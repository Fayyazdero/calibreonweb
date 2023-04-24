import Layout from "@/components/Layout";
import { getTheme, theme } from "@/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Hind Madurai", sans-serif;
    font-family: "Montserrat", sans-serif;
    font-family: "Poppins", sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  const layout = Component.layout;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={getTheme(theme)}>
        {layout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
