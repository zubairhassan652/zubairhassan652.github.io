import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CanvasArea from "../canvas/area";
import MenuListOfSideDrawer from "../menu/side-menu";



const useStyles = makeStyles((theme) => ({
    canvas: {
        'min-height': '100vh',
        'overflow': 'scroll',    
    },
    menuListWidth: {
        maxWidth: 200
    }
}));


export default function DesktopView() {

    const classes = useStyles();

    return(
        <Grid container direction='row' >
            <Grid container xs  item className={classes.menuListWidth} >
                <MenuListOfSideDrawer /> 
            </Grid>
            <Grid container direction='column' xs item className={classes.canvas} >
                <CanvasArea  /> 
            </Grid>
       </Grid >
    );
}