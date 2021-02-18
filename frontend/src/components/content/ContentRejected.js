import React from "react";
import { Typography, Container,Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import Cookie from "../cookie"
import MPButton from "../MpButton"

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginBottom: "auto",
    
    },
}));

export const ContentRejected = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Cookie/>
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${Resume.basics.x_title}`} />
            </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12}>
<MPButton/>
            </Grid>
            </Grid>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={`Pago rechazado`} />
                <TextDecrypt text={`Leito está triste`} />
            </Typography>
        </Container>
    );
};
