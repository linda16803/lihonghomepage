import React,{ useEffect, useState, useDispatch }  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Tasks from "components/Tasks/Tasks.js";
import ListOnlys from "components/Tasks/Lists.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import InputLabel from "@material-ui/core/InputLabel";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";

import { language,sourcecontrol, database,cicd,tools,experience } from "variables/careerlist";
import { TextField } from "@material-ui/core";
import { CloudCircle } from "@material-ui/icons";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Career() {
  const [tablesData, setTableData] = useState([]);
  
  const classes = useStyles();
  return (
    <div>
     
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            
            headerColor="info"
            tabs={[
              {
                tabName: "Experience",
                tabIcon: Cloud,
                tabContent: (
                  <ListOnlys 
                   tasksIndexes={[0, 1,2,3,4,5,6]}
                   tasks={experience}
                   />
                )
              },
              {
                tabName: "Education",
                tabIcon: Cloud,
                tabContent: (
                  
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            
            <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
               <h3>  Master of Computer Science </h3>
               </GridItem>
               <GridItem xs={12} sm={12} md={6}>
                 <h4> <a href='https://www.osu.edu/' target='ohiostate'> Ohio State University</a>, Columbus, OH
</h4>
               </GridItem> 
               <GridItem xs={12} sm={12} md={6}>
               <h3>  Bachelor of Electrical Engineer </h3>
               </GridItem>
               <GridItem xs={12} sm={12} md={6}>
                 <h4> <a href='https://www.zju.edu.cn/english/' target='ohiostate'> Zhejiang University</a>, Hangzhou, China
</h4>
               </GridItem> 
               <GridItem xs={12} sm={12} md={6}>
               <h3>  Data Science </h3>
               </GridItem>
               <GridItem xs={12} sm={12} md={6}>
                 <h4> <a href='https://www.udacity.com/nanodegree' target='ohiostate'> Nano Degree</a>
</h4>
               </GridItem> 
              </GridContainer>
            </CardBody>
            
          </Card>
        </GridItem>
       
      </GridContainer>
    
                )
              },
              {
                tabName: "Language",
                tabIcon: Code,
                tabContent: (
                  <ListOnlys 
                   tasksIndexes={[0, 1,2,3,4,5,6]}
                   tasks={language}
                   />
                )
              },
              {
                tabName: "Technical Skills",
                tabIcon: Code,
                tabContent: (
                  <ListOnlys
                    tasksIndexes={[0, 1,2,3,4,5,6,7]}
                    tasks={sourcecontrol}
                  />
                )
              }
              
            ]}
          />
        </GridItem>
        
      </GridContainer>
    </div>
  );
     
}
