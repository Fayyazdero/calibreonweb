import Image from "next/image";
import React, { useState } from "react";
import Wrapper, {
  Content,
  LogoWrapper,
  SubTitle,
  Title,
  BlogTitle,
  BlogeHeader,
  ViewAll,
} from "./styles";
import { ArrowRight } from "../Svgs";
import { useRouter } from "next/router";

const BlogCard = ({ description, title, author, id, ...rest }) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderedText = showMore
    ? description
    : description.slice(0, 400);

  const handleClick = (key) => {
    router.push(`/blog/${key}`);
  };

  return (
    <Wrapper {...rest}>
      <BlogeHeader onClick={() => handleClick(id)}>
        <LogoWrapper>
          <Image src="/images/blog-1.png" alt="profile-A" fill></Image>
        </LogoWrapper>
        <BlogTitle>
          <Title>{title}</Title>
          <SubTitle>{author}</SubTitle>
        </BlogTitle>
      </BlogeHeader>
      <Content>
        <p>{renderedText}</p>
      </Content>
      <ViewAll onClick={toggleShowMore}>
        <h4>{showMore ? "View less" : "View all"}</h4>
        <ArrowRight height={20} color={"#F05B25"} />
      </ViewAll>
    </Wrapper>
  );
};

export default BlogCard;
