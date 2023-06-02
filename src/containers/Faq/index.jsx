import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Heading } from "@/components/Heading";
import Layout from "@/components/Layout";
import Typo from "@/components/Typo";

import Data from "./data";
import plusIcon from "../../../public/images/plus.png";
import minimized from "../../../public/images/minimized.png";
import Image from "next/image";
import { FaqWrapper, Wrapper } from "./styles";


const Faq = () => {
  const [data, setData] = useState(Data);
  const [expendedItemId, setExpendedItemId] = useState(null);

  const handleClick = (id) => {
    expendedItemId == id ? setExpendedItemId(null) : setExpendedItemId(id)
  };
  return (
    <Layout>
      <Container>
          <Heading variant="subHeading">FAQs</Heading>
        {data?.map((item, index) => {
            const { id, faq, desc } = item;
          return (
            <FaqWrapper key={index}>
              <Wrapper>
                <Heading variant="faqHeading">{faq}</Heading>
                <Typo variant="mainTypo">{expendedItemId == id ? desc : `${!desc.length > 200 ? desc : desc.substring(0, 180)}...`}</Typo>
              </Wrapper>
              <Image
                onClick={() => handleClick(id)}
                src={expendedItemId == id ? minimized : plusIcon}
                alt="drop down"
                width={22}
                height={22}
              />
            </FaqWrapper>
          );
        })}
      </Container>
    </Layout>
  );
};

export default Faq;
