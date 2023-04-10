import Image from "next/image";
import React from "react";
import blogA from "../../assests/blog-1.png";
import Wrapper, {
  Content,
  LogoWrapper,
  SubTitle,
  Title,
  BlogTitle,
  BlogeHeader,
  ViewAll,
} from "./styles";
import ArrowRight from "../Svgs/ArrowRight";

const BlogCard = () => {
  return (
    <Wrapper>
      <BlogeHeader>
        <LogoWrapper>
          <Image src={blogA} alt="profile-A"></Image>
        </LogoWrapper>
        <BlogTitle>
          <Title>Wordpress</Title>
          <SubTitle>By Admin</SubTitle>
        </BlogTitle>
      </BlogeHeader>
      <Content>
        <p>
          It appears that the purpose of this component is to wrap several other
          components related to a section title or heading, including an image,
          a main title, and a subtitle. The name "TitleWrapper" accurately
          describes the role of this component as a container or wrapper for
          these other components. Overall, the name you have chosen is
          descriptive and accurately conveys the purpose of the component, which
          is important for making your code more readable and maintainable.
        </p>
      </Content>
      <ViewAll>
        <h4>View all</h4>
        <ArrowRight height={20} color={"#F05B25"} />
      </ViewAll>
    </Wrapper>
  );
};

export default BlogCard;
