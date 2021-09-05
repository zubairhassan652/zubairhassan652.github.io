import React, { useState } from 'react';
import './sections.css';
import InvozonetLogo from '../../static/images/invozone.png';
import ArbisoftLogo from '../../static/images/arbisoft.jpeg';
import AlchemativeLogo from '../../static/images/alchemative.png';
import HexasoftLogo from '../../static/images/hexasoft.jpeg';

import {DefaultCard} from '../utils/cards';

export default Experience 

function Experience() {
    
    const [state] = useState(
        [
            {
                logo: InvozonetLogo,
                firstHeading: 'Invozone',
                secondHeading: 'Sr. Software Engineer',
                duration: 'Jun 2021 - Present',
                paragraphs: [
                    'Here i am working on a trading bot that caputure market status of crypto currency plateform(ProBit) and place orders according to market status.',
                ]
            },
            {
                logo: ArbisoftLogo,
                firstHeading: 'Arbisoft',
                secondHeading: 'Software Engineer',
                duration: 'Jul 2020 - Mar 2021',
                paragraphs: [
                    'Here i am working as softwrae engineer, as a part of Arbisoft working on fintech project that meets heigh standards of development.',
                    'It provides loans to the customer of there merchants stores to provide ease in online purchasing for there merchants as well as for merchants customers.',
                ]
            },
            {
                logo: AlchemativeLogo,
                firstHeading: 'Alchemative',
                secondHeading: 'Python Developer',
                duration: 'Nov 2019 - Jul 2020',
                paragraphs: [
                    'Here i work on backend of the ecommerce plateforms that entract with shopify to fulfill local customer needs.',
                    'The plateform provides customization of shopify for local merchants to provide logisc services as well as financials services to there customer for the ease of online shoping. The implementaion of the product was SAAS based architecture'
                ]
            },
            {
                logo: HexasoftLogo,
                firstHeading: 'Hexasoft',
                secondHeading: 'Django Developer',
                duration: 'Jul 2019 - Oct 2019',
                paragraphs: [
                    'Here i am working as entry level developer, focus on building small piece of software and acquiring the domain knowledge of web development in following areas.',
                    'django-rest-framework, django user management, social auth2.0, payment integration, unit testing, xmldocx, git & gitlab and blockchain development workflow.'
                ]
            }
        ]
    );

    const list_items = state.map((item, index) => 
        <DefaultCard key={index} data={item} />
    );
    


    return (
        <React.Fragment>
        {list_items}
        </React.Fragment>
    ); 
}