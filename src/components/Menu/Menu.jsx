import React from 'react';
import {Button} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import {Menu} from "@material-ui/core";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Posts</MenuItem>
        <MenuItem onClick={handleClose}>Title</MenuItem>
        <MenuItem onClick={handleClose}>Body</MenuItem>
      </Menu>
    </div>
  );
}