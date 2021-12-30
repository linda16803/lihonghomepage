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

import CardFooter from "components/Card/CardFooter.js";




import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>content_copy</Icon>
              </CardIcon>
              
              <h3 className={classes.cardTitle}>
                          
              <a href={urlString} target="_blank" rel="noopener noreferrer">Upload Preload To LynkIT</a>
              </h3>
             
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                
              <a href={urlString} target="_blank" rel="noopener noreferrer">
                  Upload to LynkIT
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>content_copy</Icon>
              </CardIcon>
              
              <h3 className={classes.cardTitle}>
              <a href="/admin/UploadEcomp" >
               Upload Preload To Ecomp
               </a>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                
              <a href="/admin/UploadEcomp" >
              Upload Preload To Ecomp
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>content_copy</Icon>
              </CardIcon>
              
              <h3 className={classes.cardTitle}>
              <a href="/admin/FileManager" >
               Preload Manager
               </a>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                
              <a href="/admin/FileManager" >
                  Manage Preload
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              
              <h3 className={classes.cardTitle}>
              <a href="/admin/createdesigntemplate" >
                Create Design Template
                </a></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                <a href="/admin/createdesigntemplate" >
                Design Template Build
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>info_outline</Icon>
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Create Build Template</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Build Deployment Template
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Build Template Action</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Deployment Template Manager
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Service Instance</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Service Instance Detail
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Design Template Action</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Design Template Manager
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Preload History</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Preload Details
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Utility</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Utility App
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Admin</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Admin App
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Health History</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Health details
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
             
              <h3 className={classes.cardTitle}>Openstack Util</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                MSO Openstack Utility
              </div>
            </CardFooter>
          </Card>      
        </GridItem>
      </GridContainer>
    
        
      
    </div>
  );
}
