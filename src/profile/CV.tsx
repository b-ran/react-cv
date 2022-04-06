import React from 'react';
import './CV.css';
import Title from './components/Title';
import Intro from './components/Intro';
import Body from './components/Body';


export default class CV extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wrapper'>
                    <Title/>
                    <Intro/>
                    <Body/>
                </div>
            </div>
        )
    }
}

