import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import Cookie from "../cookie";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginBottom: "auto",
  },
}));

export const ContentSuccess = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Cookie />
      <Typography variant="h2" component="h1" gutterBottom>
        <TextDecrypt text={`${Resume.basics.x_title}`} />
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        <TextDecrypt text={`Pago Aceptado`} />
        <TextDecrypt text={`Leito está feliz`} />
      </Typography>
    </Container>
  );
};
