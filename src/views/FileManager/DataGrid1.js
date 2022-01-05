import React, { useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


import { DataGrid } from "@mui/x-data-grid";

import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
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
      lineHeight: "1",
    },
  },

  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8,
  },
  rightBox: {
    justifyContent: "center",
    alignItems: "center",
  },
};

const useStyles = makeStyles(styles);

export default function DataGrid1() {
  const classes = useStyles();
  const columns = [
    { field: "id", headerName: "ID", width: 90, hide: true },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "newcases",
      headerName: "Cases",
      width: 200,

      sortable: true,
    },
    {
      field: "total",
      headerName: "Total",
      width: 200,
      sortable: false,
    },
  ];

  const [tablesData, setTableData] = useState([]);
  const [recentDate, setRecentData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/historical/USA?lastdays=30")
      .then((response) => {
        //console.log(response.data.timeline)
        const cases = response.data.timeline.cases;
        // console.log(cases)
        let tablelist = [];

        var history1 = 0;
        var lastdate = "";
        let indexId = 1;
        for (var attributename in cases) {
         // console.log(attributename + ": " + cases[attributename]);
          if (history1 === 0) history1 = cases[attributename];
          else {
            let newcase = cases[attributename] - history1;

            tablelist.push({
              id: indexId,
              date: attributename,
              newcases: newcase,
              total: cases[attributename],
            });

            history1 = cases[attributename];
            lastdate = attributename;
            indexId++;
          }
        }

        console.log(tablelist);
        setTableData(tablelist.reverse());
        setRecentData(lastdate);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <CircularProgress />
        Loading...
      </div>
    );
  } else {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="info">
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <h4 className={classes.cardTitleWhite}>Daily Cases</h4>

                </GridItem>
                
                <GridItem xs={12} sm={12} md={4}>
                <h5 className={classes.cardTitleWhite}>Updated {recentDate} </h5>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <div style={{height: 850}}>

            <DataGrid
              rows={tablesData}
              columns={columns}
              pageSize={30}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
