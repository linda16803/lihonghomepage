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

export default function FileManager() {
  const classes = useStyles();

  
  const [regionname, setRegion] = useState('');
  const [regionsList,setRegionList] = useState([]);
  const [filelist, setFileList] = useState([]);
  const [tablesData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [preloaddetail, setPreloadDetail] = useState([]);
  const [assignmentdetail, setAssignmentDetail] = useState([]);
  const [openassignment, setOpenAssignment] = useState(false);

  const handleClickOpen =  filename => {
   
    console.log(filename)
    getFileDetails(filename, (result) => {
      let response = result.response;
      console.log(response.data)
      setPreloadDetail(response.data)
      setOpen(true);

    })
    
   
  };
  const handleClickOpenDelete =  (filename, type) => {
   
    console.log(filename)
    getFileDetails(filename, (result) => {
      let response = result.response;
      console.log(response.data)
      setPreloadDetail(response.data)
      setOpen(true);

    })
    
   
  };
  const handleClickOpenAssignment =  (name, type) => {
   
    //console.log(name, type)
    setAssignmentDetail({loading:true})
    setOpenAssignment(true)
    let assignmenttype= "vf-module"
    if ( type === 'network') assignmenttype = type
    getPreloadAssignmentSummary(name, assignmenttype, (result) => {
      if ( result.status === 'failed') {
        setAssignmentDetail({'Data Retrieving Error': 'failed'})
        setOpenAssignment(true)
      } else {
      let response = result.response;
      console.log(response.data)
      let id = response.data.id
      getPreloadAssignment(id, assignmenttype, (result1) => {
        if ( result1.status === 'failed') {
          setAssignmentDetail({'Data Retrieving Error': 'failed'})
          setOpenAssignment(true)
        } else {
         console.log(result1.response.data)
         let resultdata = result1.response.data
         setAssignmentDetail(resultdata[0])
         setOpenAssignment(true)
        }

      })

    }
    })
   
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAssignment = () => {
    setOpenAssignment(false);
  };

  const refreshFileList = (e) => {
    setLoading(true);
    console.log(e.target.value)
    setRegion(e.target.value);
    getFileListbyRegion(e.target.value, (result) => {
      let response = result.response;
    if (response && response.data && response.data.length > 0) {
      let sortedFileList = response.data.sort((a, b) => a['date'] > b['date'] ? - 1 : Number(a['date'] > b['date']))

      setFileList(sortedFileList)

      /*
      let tablelist = sortedFileList.map((files) =>
        
        [files.filename, files.type, files.status, files.date, <a href={apiUrl + "ecompsystemApp/requestPreloadMetaData/" + files.filename+'/?token=' + token}>View</a>, 'Delete']
      )
      */
      let tablelist = sortedFileList.map((files) =>
        
        [files.filename, files.type, files.status, files.date, 
        <Button link value={files.filename} onClick={() => handleClickOpen(files.filename)}>View</Button> ,
        <Button link value={files.type} onClick={() => handleClickOpenAssignment(files.vfModuleName, files.type)}>ViewAssignment</Button> ,
        <Button link value={files.filename+files.type} onClick={() => handleClickOpenDelete(files.filename)}>DeleteFromLynkIT</Button> ,
        <Button link value={files.filename+files.type} onClick={() => handleClickOpenDelete(files.filename)}>DeleteFromEcomp</Button>
      ]
      )
      console.log(tablelist);
      setTableData(tablelist);
      setLoading(false);
    
  }
  })
  }


  
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
  const getPreloadAssignmentSummary = async (name1, type, callback) => {
    
    try {
     // console.log(name1)
     
      let result = await axios.get(apiUrl + 'SDNCGWAPP/querySummary/'+name1+"/"+type + '/?token=' + token);
      callback({ status: result.status, response: result });
    } catch (err) {
      callback({ status: "failed", response: err });
    }
  } 

  const getPreloadAssignment = async (name1, type, callback) => {
    
    try {
     // console.log(name1)
      let result = await axios.get(apiUrl + 'SDNCGWAPP/queryDetail/'+name1+"/"+type + '/?token=' + token);
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
            {  <PreloadDetails  selectedValue={preloaddetail}  open={open}  onClose={handleClose}/>}
            {  <JsonTemplate  selectedValue={assignmentdetail}  open={openassignment}  onClose={handleCloseAssignment}/>}
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

