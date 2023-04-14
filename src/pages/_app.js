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
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={getTheme(theme)}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
