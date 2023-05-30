import BlogCard from "@/components/BlogCard";
import { Item, Title, Wrapper, LoadingWrapper } from "./styles";
import { Container } from "react-bootstrap";
import { Heading } from "@/components/Heading";
import { useEffect, useState } from "react";
import { client } from "@/pages";
import { ThreeDots } from 'react-loader-spinner';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    client
      .fetch(`*[_type == "posts"]`)
      .then((item) => {
        setPosts(item);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }   

  return (
    <Container>
      <Title>
        <Heading variant="subHeading" title="Blogs" />
      </Title>
      <Wrapper>
        {posts?.map((item, key) => (
            <Item>
            <BlogCard
              author={item.author}
              title={item.title}
              description={item.description}
            />
          </Item>
        ))}
        
      </Wrapper>
    </Container>
  );
};
