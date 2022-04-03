import React from 'react';
import './CV.css';
import Title from './components/Title';
import Intro from './components/Intro';


export default class CV extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wrapper'>
                    <Title/>
                    <Intro/>
                </div>
            </div>
        )
    }
}

