import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import {Favorite} from "@material-ui/icons/Favorite";
import { PlayArrow, PlayCircle } from "@mui/icons-material";
import like from "assets/sounds/ZheShiJieNaMoDuoRen.m4a";
import Table from "components/Table/Table.js";


const styles = {
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

export default function Fun() {
  const classes = useStyles();
  const likeAudio = new Audio(like);
  const playSound = audioFile => {
    audioFile.play();
}
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Keep Singing with Joy</h4>
              <h5 className={classes.cardCategoryWhite}><a href='https://node.kg.qq.com/personal?uid=639c9987232f378933&stay=1' target='mysong' className={classes.cardCategoryWhite}><b> Songs Sing By Me</b></a></h5>
            </CardHeader>
            <CardBody>
            <Button
    onClick={() => playSound(likeAudio)}
    variant="contained"
    color="primary"
>
    <PlayArrow />
</Button>
<Table
              tableHeaderColor="primary"
              tableHead={["Song", "Lyrics", "Action"]}
              tableData={[
                ["这世界那么多人(Empty World)", "原唱: 莫文蔚, 编 曲: 彭飞, 谱 曲: Akiyama Sayuri", <PlayArrow /> ],
                ["如愿", <a href='https://node.kg.qq.com/play?s=wcogwNwkqaYY-wPb&g_f=personal&appsource=&pageId=personalH5' target='mysong'>URL</a>,  <PlayArrow />],
                ["秋水伊人",  "秋水伊人",  <PlayArrow />],
                ["渡红尘",  "渡红尘",  <PlayArrow />],
                
              ]}
            />
            </CardBody>
          
          </Card>
        </GridItem>
       
      </GridContainer>
    </div>
  );
}
