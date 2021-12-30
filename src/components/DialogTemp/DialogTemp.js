import * as React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles({
  list: {
    width: 300,
    border: "1px solid gray"
  },
  text: {
    fontWeight: "bold",
    fontFamily: "courier"
    
  }
});

export default function DialogTemp(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  

  return (
    <Dialog onClose={handleClose} open={open}>
      <Card plain>
        <CardHeader plain color="info">  
      <DialogTitle>View Preload Details {selectedValue.filename}</DialogTitle>
      </CardHeader>
      </Card>
      <List sx={{ pt: 0 }}>
        
          <ListItem>
            <ListItemText classes={{ primary: classes.text }} primary="Preload Name: " />
            <ListItemText  primary={selectedValue.filename} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="Region: " />
            <ListItemText primary={selectedValue.region} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="Type: " />
            <ListItemText primary={selectedValue.type} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="VnfName: " />
            <ListItemText primary={selectedValue.vnfName} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="DirectoryPath: " />
            <ListItemText primary={selectedValue.directory_path} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="VFModuleName: " />
            <ListItemText primary={selectedValue.vfModuleName} />
          </ListItem>
          <ListItem>
          <ListItemText classes={{ primary: classes.text }} primary="vnfType: " />
            <ListItemText primary={selectedValue.vnfType} />
          </ListItem>

        </List>
    </Dialog>
  );
}

DialogTemp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};


