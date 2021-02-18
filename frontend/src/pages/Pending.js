import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { ContentPending } from "../components/content/ContentPending";
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

export const Pending = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
       
                <LogoLink />
                <ContentPending />
           
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
