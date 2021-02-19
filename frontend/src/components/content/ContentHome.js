import React from "react";
import { Typography, Container, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cookie from "../../components/cookie";
import MPButton from "../MpButton";
import { FooterText } from "../footer/FooterText";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginBottom: "auto",
  },
}));

var numbers = [];
for (var i = 1; i < 21; i++) {
  numbers.push(i);
}

export const ContentHome = () => {
  const classes = useStyles();
  const [cookies, setCookies] = React.useState(1);

  const handleChange = (event) => {
    setCookies(event.target.value);
  };
  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Cookie />
      <Typography variant="h5" component="h5" gutterBottom>
        Buy{" "}
        <Select
          style={{ marginTop: "30px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cookies}
          onChange={handleChange}
        >
          {numbers.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>{" "}
        {cookies < 2 ? "Cookie" : "Cookies"} to Leito
      </Typography>
      <MPButton cookies={cookies} />
      <FooterText />
    </Container>
  );
};
