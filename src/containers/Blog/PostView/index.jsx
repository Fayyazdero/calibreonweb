import { Heading } from "@/components/Heading"
import { Container } from "react-bootstrap"
import CoverImage from "/public/images/blogimage.png";
import User from "/public/images/qb.png";
import Image from "next/image";
import { ImageWrapper, UserImage } from "./styles";

const PostView = () => {
    return (
        <Container>
            <Heading title="Blogs" variant="subHeading"/>
            <ImageWrapper>
                <Image src={CoverImage} className="cover-img" alt="c-i"/> 
                <UserImage>
                    <Image src={User} alt="c-i"/>
                </UserImage>
            </ImageWrapper>
        </Container>
    )
}

export default PostView