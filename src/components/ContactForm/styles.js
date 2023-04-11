const { default: styled } = require("styled-components");
import { Form } from "react-bootstrap";

const Wrapper = styled("div")({
  width: " 502px",
  borderRadius: "14px",
  background: "#F05B25",
  fontFamily: "Hind Madurai",
  color: "#FFFFFF",
  paddingBottom: "29px",
});
export const Title = styled("h2")({
  fontSize: "25px",
  fontWeight: "700",
  fontFamily: "Hind Madurai",
  paddingLeft: "37px",
  paddingTop: "39px",
});
export const InputName = styled("div")({
  display: "flex",
  marginRight: "53px",
  boxSizing: "border box",
  marginLeft: "50px",
  marginTop: "60px",
});

export const StyledTextArea = styled(Form.Control)({
  background: "transparent",
  outline: "none",
  border: "2px solid  #FFFFFF",
  color: "#FFFFFF",
  borderRadius: "8px",
  width: "398.53px",
  height: "174.53px !important",
  resize: "none ",
  marginTop: "43px",
  marginLeft: "50px",
  padding: "15px 8px",
  "&::placeholder ": {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: "17px",
  },
});
export const WrapperPolicy = styled("div")({
  display: "flex",
  marginLeft: "56px",
  textAlign: "center",
  marginTop: "24px",
  "& input[type=checkbox]": {
    backgroundColor: "transparent",
    width: "18.37px",
    height: "18px",
    border: "1px solid #FFFF",
    outline: "none",
    cursor: "pointer",
    borderRadius: "2.83px",
    marginTop: "0",
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
  },
});
export const Content = styled("p")({
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  margin: "0",
  fontWeight: "400",
  marginLeft: "9px",
  marginTop: "4px",

  "& a": {
    color: "#0A66C2",
    cursor: "pointer",
    marginLeft: "4px",
    textDecoration: "none",
  },
});
export const SubmitWrapper = styled("div")({
  marginTop: "49px",
  marginRight: "39px",
  display: "flex",
  justifyContent: "end",
  "& button": {
    padding: "7px 59px",
  },
});
export default Wrapper;
