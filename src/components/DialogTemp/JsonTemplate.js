import * as React from 'react';
import PropTypes from 'prop-types';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';



import { DialogContentText } from '@material-ui/core';

const emails = {'name':'username@gmail.com','path':'testing/test'};
const useStyles = makeStyles({
  list: {
    width: 300,
    border: "1px solid gray"
  },
  text: {
    fontWeight: "bold",
    fontFamily: "courier"
    
  },
  preStyle: {
    display: 'block',
    padding: '10px 30px',
    margin: '0',
    overflow: 'scroll',
}
});

export default function JsonTemplate(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  if ( selectedValue.loading) {
    return (
      <Dialog onClose={handleClose} open={open}>
      <div><CircularProgress />
        Retrieving Data...</div>
        </Dialog>);
    } else {
  return (
    <Dialog onClose={handleClose} open={open}>
      <Card plain>
        <CardHeader plain color="info">  
      <DialogTitle>View Preload Assignment</DialogTitle>
      </CardHeader>
      </Card>
      <DialogContentText >
      <pre>{JSON.stringify(selectedValue, null, 2)} </pre>
      </DialogContentText>
    </Dialog>
  );
}
}

JsonTemplate.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};


