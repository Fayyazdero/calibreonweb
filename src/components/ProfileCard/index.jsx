import Image from "next/image";
import React from "react";
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
import verifiedIcon from "/public/images/verified-icon.png";

const ProfileCard = ({
  profile,
  title,
  subTitle,
  description,
  verifiedLogo,
  colourPrimary,
  className,
  fontSize,
}) => {
  return (
    <Wrapper className={className} colourPrimary={colourPrimary}>
      <ProfileHeader>
        <ProfileImage>
          <Image src={profile} alt="profile-A"></Image>
        </ProfileImage>
        <ProfileTitle>
          <Title>{title}</Title>
          <Certification>
            <SubTitle fontSize={fontSize}> {subTitle}</SubTitle>
            {verifiedLogo == true && (
              <VerifiedLogo>
                <Image src={verifiedIcon} alt="verified-logo"></Image>
              </VerifiedLogo>
            )}
          </Certification>
        </ProfileTitle>
      </ProfileHeader>
      <Content>
        <p>{description}</p>
      </Content>
    </Wrapper>
  );
};

export default ProfileCard;
