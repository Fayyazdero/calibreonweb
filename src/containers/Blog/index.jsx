import BlogCard from "@/components/BlogCard";
import { Item, Title, Wrapper } from "./styles";
import { Container } from "react-bootstrap";
import { Heading } from "@/components/Heading";

export const Blog = ({ posts }) => {
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
