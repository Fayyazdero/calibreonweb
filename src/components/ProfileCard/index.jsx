import Image from "next/image";
import React, { useState } from "react";
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
import { Heading } from "../Heading";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../pages/index";

const ProfileCard = ({
  profile,
  name,
  lastName,
  subTitle,
  description,
  verifiedLogo,
  variant,
  className,
  fontSize,
  onClick,
  founders,
}) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };
  return (
    <Wrapper className={className} variant={variant} onClick={onClick}>
      <ProfileHeader>
        <ProfileImage>
          <Image
            src={founders ? profile : `${urlFor(profile)?.url()}`}
            alt={"Image"}
            width={161}
            height={161}
          />
        </ProfileImage>
        <ProfileTitle>
          <Heading variant="userHeading">{name}</Heading>
          {lastName && <Heading variant="userHeading">{lastName}</Heading>}

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
        <p>
          {description?.length > 430
            ? `${description.substring(0, 350)}...`
            : description}
        </p>
      </Content>
    </Wrapper>
  );
};

export default ProfileCard;
