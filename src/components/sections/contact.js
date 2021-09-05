import React, { useState } from 'react';
import {IconCard} from '../utils/cards'

export default function Contact () {
    const [state] = useState([
        'linkedin-svg',
        'github-svg',
        'stackoverflow-svg',
        'twitter-svg',
    ]);
    return (
        <IconCard items={state} />
    );
}