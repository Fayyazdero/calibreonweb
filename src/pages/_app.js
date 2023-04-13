import { getTheme, theme } from "@/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // Add your global styles here
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
