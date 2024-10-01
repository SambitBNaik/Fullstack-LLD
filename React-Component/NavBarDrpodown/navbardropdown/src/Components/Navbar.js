import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Navbar
        </Typography>

        {/* This box contains both the Button and the Menu to handle hover */}
        <Box
          onMouseEnter={handleHover}
          onMouseLeave={(event) => {
            // Only close the menu when the cursor is not on the menu
            if (!event.currentTarget.contains(event.relatedTarget)) {
              handleClose();
            }
          }}
        >
          <Button color="inherit">Menu</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            // Attach these handlers to Menu to keep it open when hovered
            MenuListProps={{
              onMouseEnter: handleHover,
              onMouseLeave: handleClose,
            }}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </Box>

        <Button color="inherit">Link 1</Button>
        <Button color="inherit">Link 2</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
