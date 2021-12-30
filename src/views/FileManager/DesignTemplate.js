import React, { useEffect, useState, useDispatch } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { apiUrl, token } from "variables/apiWrapper";
import Button from "components/CustomButtons/Button.js";
import { DataGrid } from '@mui/x-data-grid';

import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';




const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },

  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  rightBox: {
    justifyContent: "center",
    alignItems: "center"
  }
};


const useStyles = makeStyles(styles);

export default function DesignTemplate() {
  const classes = useStyles();
  const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'region', headerName: 'REGION', width:200 },
    {
      field: 'mobility',
      headerName: 'Actions',
      width: 200,
      disableColumnMenu: true,
      sortable: false,
      
      renderCell: (params) => (
        <Button link value={params.value} onClick={() => handleClickOpen(params.value)}><strong>Upload Mobility</strong></Button>
      ),
    },
    {
      field: 'vusp',
      headerName: '',
      width: 200,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
       
          <Button link value={params.value} onClick={() => handleClickOpen(params.value)}><strong>Upload vUSP</strong></Button>
          
      ),
    }
  ];


  const handleClickOpen =  filename => {
   
    console.log(filename)
    invokeWorkflow(filename, (result) => {
      if ( result.status === 'failed') {
        alert("API Error:" + result.response)
      } else 
      {let response = result.response;
      console.log(response.data)
      
      let jobid = response.data.jobId
      let redirectUrl=apiUrl+'workflow_engine/job?job_id='+ jobid+'&autoWork=true';
      
     // let redirectUrl='https://lynkit-dyh2a-dev1.dev.att.com:8443/workflow_engine/job?job_id=9a2c708d368d459ba3108801'
      window.open(redirectUrl, 'mytesting window')
        }
    })
    
   
  };
  const invokeWorkflow = async (name1, callback) => {
    
    try {
      console.log(name1)
      let result = await axios.post(apiUrl + 'ecompsystemApp/requestsTemplate/' + name1, {});

      callback({ status: result.status, response: result });
    } catch (err) {
      callback({ status: "failed", response: err });
    }
  } 
 
  const [tablesData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    
    axios.get(apiUrl + 'ecompsystemApp/requestsFileRegion/?token=' + token).then((response) => {
      if (response && response.data ) {
          let regionlist = response.data
         console.log(response.data)
         let indexId = 0
         let tablelist =[]
         regionlist.forEach((files) => {
           let region1 = files.split('/')[0];
           if ( region1 !== undefined && region1.length >0) {
           indexId++
           tablelist.push({
            id: indexId,
            region: region1,
            mobility: 'build:lh9327:'+region1+':mobility:mobility:att-aic/approve/?token='+token,
            vusp:'build:lh9327:'+region1+':vUSP:vUSP:att-aic/approve/?token='+token
          
          })
        }        
        })
       console.log(tablelist);
       setTableData(tablelist);
       setLoading(false);
        
      }
    })
  
  
  }, [])


  if (loading) {
   
    return (
    <div><CircularProgress />
      Loading...</div>);
  } else {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>

          <CardHeader plain color="info">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h4 className={classes.cardTitleWhite}>
                  Create Design Template
                </h4>
              </GridItem>
              

            </GridContainer>
          </CardHeader>
          
          <DataGrid
        rows={tablesData}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        
      />
      </Card>
      </GridItem>
    </GridContainer>
  );
}
}

