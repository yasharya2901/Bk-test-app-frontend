import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Results() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Right Drawer</Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/results">
            <ListItemText primary="Results" />
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Results;