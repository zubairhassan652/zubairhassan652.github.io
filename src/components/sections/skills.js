import React, { useState } from 'react';
import { IconCard } from '../utils/cards';

export default function Skills () {
    const [state] = useState([
        'python-svg',
        'django-line',
        'react-original',
        'go-svg',
        'git-plain',
        'github-original',
        'ubuntu-plain',
        'ssh-original',
        'docker-plain',
        'heroku-original',
        'nginx-original',
        'postgresql-plain',
        'mysql-plain',
        'html5-plain',
        // 'javascript-plain',
        // 'css3-plain',
        'javascript-plain',
        'pycharm-plain',
        'vscode-plain',
    ]);
    return (
        <IconCard items={state} />
    );
}