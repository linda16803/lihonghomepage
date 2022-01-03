import React from "react";
import CardBody from "components/Card/CardBody.js";

import CardFooter from "components/Card/CardFooter.js";
import Image from '../../assets/img/map.jpg';
import Paper from '@material-ui/core/Paper';
import { makeStyles,MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography } from '@material-ui/core/';
import Table from "components/Table/Table.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { citylist } from "variables/citylist";
import { whiteColor } from "assets/jss/material-dashboard-react";

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
       <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          
              <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
             <h3 className={classes.cardTitleWhite}><b>Cities</b></h3>
               
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
             <h3 className={classes.cardTitleWhite}><b>National Parks</b></h3>
               
               </GridItem>
              
              
               {citylist.map((x) => (
              <GridItem xs={12} sm={12} md={x.size}>
                   
                 <h4 className={classes.cardTitleWhite}><b> <a href={x.href} target='tours'className={classes.cardTitleWhite}> <b>{x.name}</b></a>
</b></h4>
               </GridItem>
               ))}
                 
               
               
              </GridContainer>
            
        </GridItem>
       
      </GridContainer> 
      </Paper>
   
  );
}

