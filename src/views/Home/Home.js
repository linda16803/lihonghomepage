import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";

import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";
import { urlString } from "variables/apiWrapper";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import CardFooter from "components/Card/CardFooter.js";
import Image from "../../assets/img/homepage1.png";
import Paper from "@material-ui/core/Paper";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const backgroundstyles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
  },
};

export default function Home() {
  const classes = useStyles();
  return (
    <Paper style={backgroundstyles.paperContainer}>
      <CardBody>
        <div>
          <h1 className={classes.cardTitleWhite}>
            <b>Hello World</b>{" "}
          </h1>
        </div>
        <div>
          <h3 className={classes.cardTitleWhite}>
            {" "}
            This is Lihong's Small World
          </h3>
        </div>
        <div>
          <h4 className={classes.cardTitleWhite}>
            {" "}
            Software developer as my career
          </h4>
          <h4 className={classes.cardTitleWhite}>Traveling as my enjoy </h4>
          <h4 className={classes.cardTitleWhite}>Singing as my hobby! </h4>
        </div>
      </CardBody>
    </Paper>
  );
}
