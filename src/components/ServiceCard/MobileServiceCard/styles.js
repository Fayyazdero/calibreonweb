import styled from "styled-components";

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.colors.deepPurple,
  display: "flex",
  flexDirection: "column",
  height: "304px",
  borderRadius: "20px",
  alignItems: "center",
}));

export const ImageWrapper = styled.div`
  width: 526px;
  position: relative;
  max-width: calc(100% - 58px);
  height: 294px;
  left: 0;
  bottom: unset;
  margin-top: -144px;
  margin-bottom: 24px;
`;

export default Wrapper;
