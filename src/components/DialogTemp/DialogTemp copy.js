import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = [{'name':'username@gmail.com','path':'testing/test'}, {'name': 'user02@gmail.com', 'path':'/test/1'}];

export default function DialogTemp(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email.name)} key={email.name}>
            <ListItemAvatar>
             name
            </ListItemAvatar>
            <ListItemText primary={email.name} />
            <ListItemAvatar>
             path
            </ListItemAvatar>
            <ListItemText primary={email.path} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              List
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

DialogTemp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


