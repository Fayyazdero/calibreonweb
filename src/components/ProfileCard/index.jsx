import Image from "next/image";
import React from "react";
import profileA from "../../assests/profile-1.png";
import Wrapper, {
  Content,
  ProfileImage,
  SubTitle,
  Title,
  ProfileTitle,
  ProfileHeader,
  VerifiedLogo,
  Certification,
} from "./styles";
import verifiedIcon from "../../assests/verified-icon.png";

const ProfileCard = () => {
  return (
    <Wrapper>
      <ProfileHeader>
        <ProfileImage>
          <Image src={profileA} alt="profile-A"></Image>
        </ProfileImage>
        <ProfileTitle>
          <Title>Mandy</Title>
          <Certification>
            <SubTitle>Quickbook Certified</SubTitle>
            <VerifiedLogo>
              <Image src={verifiedIcon} alt="verified-logo"></Image>
            </VerifiedLogo>
          </Certification>
        </ProfileTitle>
      </ProfileHeader>
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
    </Wrapper>
  );
};

export default ProfileCard;
