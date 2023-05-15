import BlogCard from "@/components/BlogCard";
import { Item, Title, Wrapper } from "./styles";
import { Container } from "react-bootstrap";
import { Heading } from "@/components/Heading";
import { useEffect, useState } from "react";
import { client } from "@/pages";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "posts"]`)
      .then((item) => {
        setPosts(item);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);
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
