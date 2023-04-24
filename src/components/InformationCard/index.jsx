import React from "react";
import Wrapper, {
  AwardTitle,
  Awards,
  Details,
  Name,
  Title,
  Workers,
  Year,
  YearTitle,
} from "./styles";

const InformationCard = () => {
  return (
    <Wrapper>
      <Title>Company Information</Title>
      <Details>
        <Name>Agency size</Name>
        <Workers>51-200 workers</Workers>
      </Details>
      <Details>
        <YearTitle>Year Found</YearTitle>
        <Year>2013</Year>
      </Details>
      <Details>
        <AwardTitle>Awards</AwardTitle>
        <Awards>
          Netsuite Procurement Expert
          <br />
          QBO Pro Advisor
          <br />
          Xero Advisor Certified
        </Awards>
      </Details>
    </Wrapper>
  );
};

export default InformationCard;
