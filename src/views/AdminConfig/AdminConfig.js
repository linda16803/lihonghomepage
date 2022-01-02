import React,{ useEffect, useState, useDispatch }  from "react";
// react plugin for creating charts

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import InputLabel from "@material-ui/core/InputLabel";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";

import { website, server } from "variables/general.js";
import { apiUrl, token } from "variables/apiWrapper";
import axios from 'axios';


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function AdminConfig() {
  const classes = useStyles();
  const [tablesData, setTableData] = useState([]);
  const [tablesKey, setTableKey] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    

  
  }, [])
  
  return (
    <div>
     
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Collections:"
            headerColor="info"
            tabs={[
              {
                tabName: "ENV",
                tabIcon: Cloud,
                tabContent: (
                  
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            
            <CardBody>
              <GridContainer>
              {tablesData.map((itemdata) => (
              Object.keys(itemdata).map((itemkey, index) => (
                
                  itemkey === "_id"  ? '':
                  <GridItem xs={12} sm={12} md={12/(Object.keys(itemdata).length-1)}>
                  
                  <TextField 
                    label={itemkey}
                    id={index} 
                    formControlProps={{
                      fullWidth: true
                    }}
                   

                    defaultValue={itemdata[itemkey]}/>
                 
                </GridItem>
            
                ))
              ))}
                
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
       
      </GridContainer>
    
                )
              },
              {
                tabName: "UtilProp",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "UploadProp",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
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
