import {
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

const Header = (props) => {
  const { open, drawerWidth, toggleDrawer } = props;
  const handleToggleDrawer = () => {
    if (toggleDrawer) {
      toggleDrawer();
    }
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) =>
      prop !== 'open' && prop !== 'drawerWidth',
  })(({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="absolute" open={open} drawerWidth={drawerWidth}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleToggleDrawer()}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
