import React from "react";
import CardBody from "components/Card/CardBody.js";

import CardFooter from "components/Card/CardFooter.js";
import Image from '../../assets/img/worldmap.PNG';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const backgroundstyles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      height: '100vh'
  }
};

export default function Home() {
  const classes = useStyles();
  return (
   
    
      <Paper style={backgroundstyles.paperContainer}>
        
      </Paper>
   
  );
}