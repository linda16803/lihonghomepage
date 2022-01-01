import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

export default function Linda() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>Software Developer</h4>
        <p className={classes.cardCategoryWhite}>
          
        </p>
      </CardHeader>
      <CardBody>
        <div >
          <h4><a href='https://wiki.web.att.com/pages/viewpage.action?pageId=892147331' target="mywiki"> Lihong tSpace HomePage</a></h4>
        </div>
        <div >
          <h4><a href='https://teams.microsoft.com/_#/files/Lab%20and%20Prod%20Environment%20Status?threadId=19%3A5b91aebdab804caeb49557592a3c6890%40thread.tacv2&ctx=channel&context=Lab%2520Environment&rootfolder=%252Fsites%252FAutomationToolsInternalTeam%252FShared%2520Documents%252FLab%2520Environment' target="environmentDoc"> Environment Docoument</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/npm' target="mynpm">NPM reference</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/Create+ADO+Pipeline' target="myado"> Create ADO Pipeline</a></h4>
        </div>
        <div >
          <h4><a href='http://moose.web.att.com/' target="mymoose"> Moose</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/mongodb' target="mymongo"> MongoDB</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/Node.js+Reference+Page' target="mynodejs"> NodeJs reference</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/git+reference' target="mygit"> Git reference</a></h4>
        </div>
        <div >
          <h4><a href='https://wiki.web.att.com/display/~lh9327/Useful+Commands+for+self' target="mycmd"> Useful Commands</a></h4>
        </div>

        
      </CardBody>
    </Card>
  );
}
