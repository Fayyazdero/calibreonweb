import { Heading } from "@/components/Heading";
import { Container } from "react-bootstrap";
import CoverImage from "/public/images/blogimage.png";
import User from "/public/images/qb.png";
import Image from "next/image";
import {
  ImageWrapper,
  UserImage,
  BlogTitle,
  Title,
  SubTitle,
  TypoWrapper,
} from "./styles";
import Typo from "@/components/Typo";

const PostView = ({ post }) => {
  return (
    <Container>
      <Heading title="Blogs" variant="subHeading" />
      <ImageWrapper>
        <Image src={CoverImage} className="cover-img" alt="c-i" />
        <UserImage>
          <Image src={User} alt="c-i" />
        </UserImage>
      </ImageWrapper>
      <BlogTitle>
        <Title>{post?.title}</Title>
        <SubTitle>By {post?.author}</SubTitle>
      </BlogTitle>
      <TypoWrapper>
        <Typo variant="mainTypo">{post?.description}</Typo>
      </TypoWrapper>
    </Container>
  );
};

export default PostView;
