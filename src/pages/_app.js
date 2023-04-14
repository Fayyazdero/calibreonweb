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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={getTheme(theme)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
