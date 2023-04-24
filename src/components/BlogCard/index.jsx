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

const BlogCard = ({description}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const renderedText = showMore ? description : description.slice(0, 400);
  return (
    <Wrapper>
      <BlogeHeader>
        <LogoWrapper>
          <Image src="/images/blog-1.png" alt="profile-A" fill ></Image>
        </LogoWrapper>
        <BlogTitle>
          <Title>Wordpress</Title>
          <SubTitle>By Admin</SubTitle>
        </BlogTitle>
      </BlogeHeader>
      <Content>
        <p>
         {renderedText}
        </p>
      </Content>
      <ViewAll onClick={toggleShowMore} >
        <h4>{showMore ?  'View less':'View all'}</h4>
        <ArrowRight height={20} color={"#F05B25"} />
      </ViewAll>
    </Wrapper>
  );
};

export default BlogCard;
