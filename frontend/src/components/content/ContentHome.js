import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
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

export const ContentHome = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Cookie />
      <Typography variant="h2" component="h1" gutterBottom>
        <TextDecrypt text={`${Resume.basics.x_title}`} />
      </Typography>
      <MPButton />
      <FooterText />
    </Container>
  );
};
