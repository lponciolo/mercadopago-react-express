import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { ContentRejected } from "../components/content/ContentRejected";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FooterIcons } from "../components/footer/FooterIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
}));

export const Rejected = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
       
                <LogoLink />
                <ContentRejected />
                <Hidden smDown>
                    <FooterIcons />
                </Hidden>
                <Hidden mdUp>
                    <SpeedDials />
                </Hidden>
         
            </div>
        </>
    );
};
