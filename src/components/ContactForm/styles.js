const { default: styled } = require("styled-components");
import { Form } from "react-bootstrap";

const Wrapper = styled("div")(({ theme: { colors } }) => ({
  borderRadius: "14px",
  background: colors?.primary,
  paddingBottom: "29px",
  width: "100%",
  boxSizing: "border-box",
}));
export const HeadingWrapper = styled("div")({
  paddingLeft: "37px",
  paddingTop: "39px",
});
export const NameInputs = styled("div")({
  display: "flex",
  marginRight: "53px",
  boxSizing: "border box",
  marginLeft: "50px",
  marginTop: "60px",
  "& input:last-child": {
    marginLeft: "29px",
  },
});

export const ContactInputs = styled("div")({
  marginLeft: "50px",
  marginRight: "53px",
});
export const StyledTextArea = styled(Form.Control)(({ theme: { colors } }) => ({
  background: "transparent",
  outline: "none",
  border: `2px solid  ${colors?.white}`,
  color: colors?.white,
  borderRadius: "8px",
  width: "100%",
  height: "174.53px !important",
  resize: "vertical",
  marginTop: "43px",
  padding: "15px 8px",
  "&::placeholder ": {
    color: colors?.white,
  },
}));
export const WrapperPolicy = styled("div")({
  display: "flex",
  marginLeft: "56px",
  textAlign: "center",
  marginTop: "24px",
  alignItems: "center",
  "& input[type=checkbox]": {
    backgroundColor: "transparent",
    width: "18.37px",
    height: "18px",
    border: "1px solid #FFFF",
    outline: "none",
    cursor: "pointer",
    borderRadius: "2.83px",
    marginTop: "0",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      outline: "none",
    },
    "&:focus": {
      boxShadow: "inherit",
    },
  },
  "& span": {
    background: "transparent",
    outline: "none",
    border: "none",
    padding: "0",
    marginTop: "0",
    display: "none",
  },
});
export const Content = styled("p")(({ theme: { colors } }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  margin: "0",
  fontWeight: "400",
  marginLeft: "9px",
  color: colors?.white,

  "& a": {
    color: "#0A66C2",
    cursor: "pointer",
    marginLeft: "4px",
    textDecoration: "none",
  },
}));
export const SubmitWrapper = styled("div")({
  marginTop: "49px",
  marginRight: "39px",
  display: "flex",
  justifyContent: "end",
  "& button": {
    padding: "7px 59px",
    "&:hover": {
      border: "1px solid #FFFFFF",
    },
    "&:active": {
      border: "1px solid #FFFFFF !important",
      color: " #FFFFFF !important",
    },
  },
  "& .submit-button": {
    fontWeight: "600",
  },
});

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;
export default Wrapper;
