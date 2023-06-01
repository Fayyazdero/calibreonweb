import BlogCard from "@/components/BlogCard";
import { Item, Title, Wrapper } from "./styles";
import { Container } from "react-bootstrap";
import { Heading } from "@/components/Heading";
import {  useRouter } from "next/router";

export const Blog = ({ posts }) => {
  const router = useRouter();
  const handleClick = (key) => {
    alert(key);
    router.push(`/blog/${key}`)
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
            onClick={() => handleClick(key)}
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
