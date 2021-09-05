import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
// import SideMenu from './components/menu/drawar';
// import MenuListOfSideDrawer from './components/menu/side-menu';
// import CanvasArea from './components/canvas/area';
import MobileView from './components/design/mobile';
import DesktopView from './components/design/desktop';

function App() {
  const theme = useTheme();
  // console.log(theme.breakpoints.down('xs'));
  const mobileView = useMediaQuery(theme.breakpoints.down('xs'));
  // const mobileView = useMediaQuery('(max-width:600px)');
  return (
    <Grid container>
       { mobileView ? <MobileView /> : <DesktopView /> }
    </Grid>
  );
}

export default App;
