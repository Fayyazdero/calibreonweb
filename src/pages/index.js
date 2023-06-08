import Home from "@/containers/Home";
import Head from "next/head";
import { createClient } from "next-sanity";
import { groq } from "next-sanity";

export const client = createClient({
  projectId: "hi7eel47",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const homeQuery = groq`*[_type == "home"]`;
const bannerQuery = groq`*[_type == "banner"]`;
const servicesQuery = groq`*[_type == "home"]`;

export const getStaticProps = async () => {
  const home = await client.fetch(homeQuery)
  const banner = await client.fetch(bannerQuery)
  const services = await client.fetch(servicesQuery)
  return { props: { home, banner, services }}
}

const Index = ({ home, banner, services }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Madurai&display=swap"
            rel="stylesheet"
          />
        </Head>
      </Head>
      <Home home={home} banner={banner[0]} services={services} />
    </>
  );
};
Index.layout = true;
export default Index;
