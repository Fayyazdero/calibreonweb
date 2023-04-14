import Layout from "@/components/Layout";
import { getTheme, theme } from "@/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Hind Madurai", sans-serif;
    font-family: "Montserrat", sans-serif;
    font-family: "Poppins", sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  const layout = Component.layout

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={getTheme(theme)}>
        {
          layout ? <Layout>
            <Component {...pageProps} />
            </Layout>: 
            <Component {...pageProps} />
        }
      </ThemeProvider>
    </>
  );
}

export default MyApp;
