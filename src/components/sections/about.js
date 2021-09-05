
import React, { useState } from 'react';
import {DefaultCard} from '../utils/cards';
import './sections.css';


export default function About() {
    
    const [state] = useState(
        {
            firstHeading: 'About',
            secondHeading: 'Hello, Its me Zubair Hassan, Sofware Engineer at InvoZone.',
            paragraphs: [
                "I'm a full-stack engineer with a strong preference for back-end development. I pride myself on writing clean, readable, testable and extensible code. ",
                "Outside of work, I am always looking to learn new frameworks, libraries and programming languages."
            ]
        }
    );
    return (
        <DefaultCard data={state} />

        // <Grid container item xs alignItems='center' justifyContent='center' >
        // <Card className={classes.root}>
        //     <CardContent>
        //         <Typography variant="h5" component="h2">
        //             About
        //         </Typography>
        //         <Typography className={classes.pos} >
        //             Hello, Its me Zubair Hassan, Sofware Engineer at Arbisoft.

        //         </Typography>
        //         <Typography variant="body2" component="p">
        //             I'm a full-stack engineer with a strong preference for back-end development. 
        //             I pride myself on writing clean, readable, testable and extensible code.
        //             Outside of work, I am always looking to learn new frameworks, libraries and programming languages.
                    
        //         </Typography>
        //     </CardContent>
        // </Card>
        // </Grid>
    );
}