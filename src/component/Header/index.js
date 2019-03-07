import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

export default function () {
    return (
        <header className="header_main">
            <div className="wrapper">
                <Link to='/'><span>MEDLAB</span></Link>
            </div>
        </header>
    )
}