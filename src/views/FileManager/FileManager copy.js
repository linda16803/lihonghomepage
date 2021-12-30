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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import axios from 'axios';
import { createPartiallyEmittedExpression } from "typescript";



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

export default function FileManager() {
  const classes = useStyles();

  
  const [regionname, setRegion] = useState('');
  const [regionsList,setRegionList] = useState([]);
  const [filelist, setFileList] = useState([]);
  const [tablesData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshFileList = (e) => {
    setLoading(true);
    console.log(e.target.value)
    setRegion(e.target.value);
    getFileListbyRegion(e.target.value, (result) => {
      let response = result.response;
    if (response && response.data && response.data.length > 0) {
      let sortedFileList = response.data.sort((a, b) => a['date'] > b['date'] ? - 1 : Number(a['date'] > b['date']))

      setFileList(sortedFileList)

      let tablelist = sortedFileList.map((files) =>
        
        [files.filename, files.type, files.status, files.date, <a href={apiUrl + "ecompsystemApp/requestPreloadMetaData/" + files.filename+'/?token=' + token}>View</a>, 'Delete']
      )
      
      console.log(tablelist);
      setTableData(tablelist);
      setLoading(false);
    
  }
  })
  }


  console.log(regionname)
  const getFileListbyRegion = async (name1, callback) => {
    
    try {
      console.log(name1)
      let result = await axios.get(apiUrl + 'ecompsystemApp/requestsPreloadMetaData/' + name1 + '/?token=' + token);
      callback({ status: result.status, response: result });
    } catch (err) {
      callback({ status: "failed", response: err });
    }
  } 

  
  
  useEffect(() => {
    
    axios.get(apiUrl + 'AaiApp/getRegionNamesAll/?token=' + token).then((response) => {
      if (response && response.data && response.data['cloud-region'] && response.data['cloud-region'].length > 0) {
        let sortedRegionList = response.data['cloud-region'].sort((a, b) => a['cloud-region-id'] < b['cloud-region-id'] ? - 1 : Number(a['cloud-region-id'] > b['cloud-region-id']))

        //console.log(response.data)
        //setRegionsList(response.data['cloud-region'])
        setRegionList(sortedRegionList)
      }
    })
  /*
    if ( regionname !== '') {
    axios.get(apiUrl + 'ecompsystemApp/requestsPreloadMetaData/' + regionname + '/?token=' + token).then((response)  => {
    if (response && response.data && response.data.length > 0) {
      let sortedFileList = response.data.sort((a, b) => a['date'] > b['date'] ? - 1 : Number(a['date'] > b['date']))

      setFileList(sortedFileList)

      let tablelist = filelist.map((files) =>
        [files.filename, files.type, files.status, files.date, <a href={apiUrl}>View</a>, 'Delete']
      )
      console.log(regionname);
      console.log(tablelist);
      setTableData(tablelist);
      setLoading(false);
    }

    })
    
  }
  */
  
  }, [regionname])


  if (loading) {
   
    return <div>Loading...</div>;
  } else {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>

          <CardHeader plain color="info">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h4 className={classes.cardTitleWhite}>
                  Preload Manager
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>

                <InputLabel id="label">Select Region</InputLabel>
                <Select name="regions" id="regions" value={regionname} onChange={refreshFileList} style={{ width: '100%' }}>
                  <MenuItem value="">--Select Region Name--</MenuItem>
                  {regionsList.map((x) => (
                    <MenuItem value={x['cloud-region-id']} key={x['cloud-region-id']} >{x['cloud-region-id']}</MenuItem>
                  ))}
                </Select>
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
    tableHead={["Preload Name", "Preload Type", "STATE", "LoadedToLynkIT", "Action"]}
    tableData={tablesData}
  />)
}