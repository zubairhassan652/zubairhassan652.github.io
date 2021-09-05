import React, { useState } from 'react';
import './sections.css';
import PucitLogo from '../../static/images/pucit.png';
import {DefaultCard} from '../utils/cards';



export default function Education() {
    const [state] = useState({
        logo: PucitLogo,
        firstHeading: 'University of the Punjab(PUCIT)',
        secondHeading: 'MSc(CS)',
        paragraphs: [
            'Punjanb University College of Information Tecnology(PUCIT) is the one the best institution in pakistan for computer science education. I truely enjoyed the moments of lerning here.',
        ]
    });
    return (
        <React.Fragment>
            <DefaultCard data={state} />
        </React.Fragment>
    );
}