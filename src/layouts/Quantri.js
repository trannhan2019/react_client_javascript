import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Header from '../components/quantri/Header';
import Sidebar from '../components/quantri/Sidebar';

function Quantri() {
  const drawerWidth = 240;

  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        open={open}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <Sidebar
        open={open}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Quantri;
