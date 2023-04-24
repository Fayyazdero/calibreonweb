import BlogCard from "@/components/BlogCard"
import { Item, Title, Wrapper } from "./styles"
import { Container } from "react-bootstrap"
import { Heading } from "@/components/Heading"

export const Blog = () => {
    return <Container>
        <Title>
            <Heading variant="subHeading" title="Blogs" />
        </Title>
            <Wrapper  >
                <Item>
                    <BlogCard description={`It appears that the purpose of this component is to wrap several other
                        components related to a section title or heading, including an image,
                        a main title, and a subtitle. The name "TitleWrapper" accurately`} />
                </Item>
                <Item>
                <BlogCard description={`It appears that the purpose of this component is to wrap several other
            components related to a section title or heading, including an image,
            a main title, and a subtitle. The name "TitleWrapper" accurately
            describes the role of this component as a container or wrapper for
            these other components. Overall, the name you have chosen is
            descriptive and accurately conveys the purpose of the component, which
            is important for making your code more readable and maintainable.`} />
                </Item>
                        <Item>
                        <BlogCard description={`It appears that the purpose of this component is to wrap several other
                    components related to a section title or heading, including an image,
                    a main title, and a subtitle. The name "TitleWrapper" accurately
                    describes the role of this component as a container or wrapper for
                    these other components. Overall, the name you have chosen is
                    descriptive and accurately conveys the purpose of the component, which
                    components related to a section title or heading, including an image,
                    a main title, and a subtitle. The name "TitleWrapper" accurately
                    describes the role of this component as a container or wrapper for
                    these other components. Overall, the name you have chosen is
                    descriptive and accurately conveys the purpose of the component, which
                    components related to a section title or heading, including an image,
                    a main title, and a subtitle. The name "TitleWrapper" accurately
                    describes the role of this component as a container or wrapper for
                    these other components. Overall, the name you have chosen is
                    descriptive and accurately conveys the purpose of the component, which
                    components related to a section title or heading, including an image,
                    a main title, and a subtitle. The name "TitleWrapper" accurately
                    describes the role of this component as a container or wrapper for
                    these other components. Overall, the name you have chosen is
                    descriptive and accurately conveys the purpose of the component, which
                    is important for making your code more readable and maintainable.`} />
                </Item>
               
                    
        </Wrapper>
        </Container>
}