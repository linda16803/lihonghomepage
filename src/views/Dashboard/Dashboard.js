import React, { useEffect, useState, useDispatch } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import { dailySalesChart, emailsSubscriptionChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [tablesData, setTableData] = useState([]);
  const [recentDate, setRecentData] = useState('')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/historical/USA?lastdays=20")
      .then((response) => {
        //console.log(response.data.timeline)
        const cases = response.data.timeline.cases;
        // console.log(cases)
        const labels = [];
        const series = [];
        var history1 = 0;
        var lastdate='';
        for (var attributename in cases) {
          console.log(attributename + ": " + cases[attributename]);
          if (history1 === 0) history1 = cases[attributename];
          else {
            labels.push(attributename.slice(0, -3));
            series.push(cases[attributename] - history1);
            history1 = cases[attributename];
            lastdate= attributename
          }
        }
        const data1 = {
          labels: labels,
          series: [series],
        };
        console.log(data1);
        setTableData(data1);
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
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              {/* <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={tablesData}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader> */}
              <CardBody>
                <div style={{ backgroundColor: "blue" }}>
                  <ChartistGraph
                    className="ct-chart"
                    data={tablesData}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                </div>
                <h4 className={classes.cardTitle}>Daily Cases</h4>
                <p className={classes.cardCategory}>
                  Updated {recentDate}
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
