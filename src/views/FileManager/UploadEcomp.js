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

import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import JsonTemplate from "components/DialogTemp/JsonTemplate";

import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import PreloadDetails from "components/DialogTemp/PreloadDetails";




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

export default function UploadEcomp() {
  const classes = useStyles();

  
  const [regionname, setRegion] = useState('');
  const [regionsList,setRegionList] = useState([]);
  
  const [tablesData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [preloaddetail, setPreloadDetail] = useState([]);
 
  const handleClickOpen =  filename => {
   
    console.log(filename)
    getFileDetails(filename, (result) => {
      let response = result.response;
      console.log(response.data)
      setPreloadDetail(response.data)
      setOpen(true);

    })
    
   
  };
 
 
  const handleClose = () => {
    setOpen(false);
  };
 
  


  
  const getFileListbyRegion = async (name1, callback) => {
    
    try {
      //console.log(name1)
      let result = await axios.get(apiUrl + 'ecompsystemApp/requestsPreloadMetaData/' + name1 + '/?token=' + token);
      callback({ status: result.status, response: result });
    } catch (err) {
      callback({ status: "failed", response: err });
    }
  } 

  const getFileDetails = async (name1, callback) => {
    
    try {
     // console.log(name1)
      let result = await axios.get(apiUrl + 'ecompsystemApp/requestPreloadMetaData/' + name1 + '/?token=' + token);
      callback({ status: result.status, response: result });
    } catch (err) {
      callback({ status: "failed", response: err });
    }
  } 



  useEffect(() => {
    
    axios.get(apiUrl + 'ecompsystemApp/getVNFPreloadFiles/?token=' + token).then((response) => {
      if (response && response.data ) {
          let regionlist = response.data
         //console.log(response.data)
         let tablelist = regionlist.map((files) =>
        
         [files.split('/')[4] ? files.split('/')[4] : "N/A",files.split('/')[5] ? files.split('/')[5] : "N/A",  
         <Button variant="outlined" value={files.filename} onClick={() => handleClickOpen(files.filename)}>Upload USP</Button> ,
         
         <Button variant="outlined" value={files.filename+files.type} onClick={() => handleClickOpen(files.filename)}>Upload Mobility</Button>
       ]
       )
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
                  Upload To Ecomp
                </h4>
              </GridItem>
              

            </GridContainer>
          </CardHeader>
          <CardBody>
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["Preload Name", "Preload Type", "STATE", "LoadedToLynkIT", "Action"]}
              tableData={tablesData}
            /> */}
            {!loading && <FileTable tablesData={tablesData} />}
            {  <PreloadDetails  selectedValue={preloaddetail}  open={open}  onClose={handleClose}/>}
            
          </CardBody>
          
        </Card>
      </GridItem>
    </GridContainer>
  );
}
}

const FileTable = ({ tablesData }) => {
  console.log(tablesData);
  return (<Table
    tableHeaderColor="primary"
    tableHead={["Region", "Module Type", "Action"]}
    tableData={tablesData}
  />)
}

