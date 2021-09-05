import { Avatar, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { DevIcon } from './icons';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 575,
        textAlign: 'center',
        margin: 30,
        backgroundColor: theme.palette.background.paper,
        
    },
    gridInline: {
        display: 'inline-flex',
        justifyContent: 'center',
    },
    paragraphAlignment: {
        textAlign: 'justify',
    },
    headingAlignCenter: {
        paddingRight: '20%',
    },
    pos: {
        marginBottom: 12,
    },
    wrapContent: {
        overflowWrap: 'break-word',
    }
  }));

function DefaultCard(props) {
    const classes = useStyles();
    console.log(props.data.logo);

    const renderHeaderGrids = () => {
        if (props.data.logo !== undefined){
            return (
                <React.Fragment>
                    <Grid container item xs={2} className={classes.gridInline}>
                        <Avatar src={props.data.logo} alt='Avatar' />
                    </Grid>
                    <Grid container item xs={10} className={classes.gridInline}>
                        <Typography variant="h5" component="h2" className={classes.headingAlignCenter}>
                        {props.data.firstHeading}
                        </Typography>
                    </Grid>
                </React.Fragment>
            );
            
        }
        return (
            <React.Fragment> 
                <Grid container item xs='auto' className={classes.gridInline}>
                    <Typography variant="h5" component="h2">
                        {props.data.firstHeading}
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <Grid container item xs direction='column' alignItems='center' justifyContent='center' >
        <Card className={classes.root} >
            <CardContent >
                {renderHeaderGrids()}
                <Typography className={classes.pos} >
                    {props.data.secondHeading}
                </Typography>
                {props.data.paragraphs.map(paragraph => 
                    <Typography variant="body2" component="p" className={classes.paragraphAlignment}>
                        {paragraph}
                    </Typography>  
                )}
                
            </CardContent>
        </Card>
        </Grid>
    );
}


function IconCard(props) {
    const classes = useStyles();
    console.log(props.items);
    const iconItems = () => {
        return(
            <React.Fragment>
                {props.items.map((item, index) => 
                    <DevIcon key={index} iconType={item} />
                )}
            </React.Fragment>
        );
    }
    return(
        <Grid container item xs direction='row' alignItems='center' justifyContent='center' >
        <Card className={ clsx([classes.root, classes.wrapContent])} >
            <CardContent >
                {iconItems()}
                {/* <DevIcon skill='django-line' /> */}
            </CardContent>
        </Card>
        </Grid>
    );
    
}

export {DefaultCard, IconCard}