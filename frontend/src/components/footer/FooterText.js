import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom } from "@material-ui/core";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    footerText: {
   
        "&:hover": {
            color: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const FooterText = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title={"MercadoPago React.js Example"}
            placement="top"
            TransitionComponent={Zoom}
        >
            <Link
                color="inherit"
                underline="none"
                href="https://github.com/lponciolo"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footerText}
            >
                <Typography variant="body1" style={{  paddingTop:"20px" }}>
                    <i className="fas fa-code fa-sm" /> MercadoPago SDK with Express.js and React.js Example
                </Typography>
            </Link>
        </Tooltip>
    );
};
