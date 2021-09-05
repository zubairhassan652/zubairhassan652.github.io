import React, {useState} from 'react';
import './sections.css';
import PortfolioLogo from '../../static/images/portfolio.png';
import DigitalMarkingLogo from '../../static/images/digitalmarking.png';
import CellonLogo from '../../static/images/cellon.png';
import SomniLogo from '../../static/images/somni.png';
import IfinancePayLogo from '../../static/images/ifinancepay.png';
import {DefaultCard} from '../utils/cards';


export default function Projects() {
    const [state] = useState(
        [
            {
                logo: IfinancePayLogo,
                firstHeading: 'IFinancePay',
                secondHeading: 'https://ifinancepay.com/',
                paragraphs: [
                    'its a fintech project that provides loans to the customer of there merchants stores to provide ease in online purchasing for there merchants as well as for merchants customers.',
                ]
            },
            {
                logo: SomniLogo,
                firstHeading: 'Somni',
                secondHeading: 'https://smni.alchemative.net',
                paragraphs: [
                    'This is a SAAS based product to customize shopify to fulfill the needs of local customers like providing custome payment methods and local logistic services(TCS, MNP, LEOPARDS...) for ecommerce stores.',
                ]
            },
            {
                logo: PortfolioLogo,
                firstHeading: 'React Portfolio',
                secondHeading: '/',
                paragraphs: [
                    'This is my personal portfolio written from scratch with react and Matrial UI. This is build through accross the devices like web and mobile and also make it PWA for app like experiance.',
                ]
            },
            {
                logo: CellonLogo,
                firstHeading: 'Cellon',
                secondHeading: 'https://cellon.alchemative.net/',
                paragraphs: [
                    'This app is about to view and download specific data of a shopify store to provide insights of there sails.',
                ]
            },
            {
                logo: DigitalMarkingLogo,
                firstHeading: 'Digital Marking',
                secondHeading: 'https://digitalmarking.site/',
                paragraphs: [
                    'This project is about Optimal Mark Recognition (OMR) reading which generates bubble sheets and read them with answer key and provide provide success count according to key',
                ]
            }
        ]
    );


    return ( 
        <React.Fragment>
            {state.map((item, index) => 
                <DefaultCard key={index} data={item} />
            )}
        </React.Fragment>
    );
}

export function ProjectsCard(props) {
    const project = props.project;

    return ( 
        < div className = "project-container"> 
            < div className = "heading"> 
                <a href={project.url} 
                target="_blank ">{project.project_name}</a>
            </div>
                    
            <div className="body">
                <div className="overlay">
                    <div className="description-container ">
                    {project.details.map(paragraph => 
                        <p>{paragraph}</p>
                    )}
                    </div>
                </div>
                <img className="project-image" src={project.logo} alt='project logo'/>
            </div>     
        </div>
        
    );
}