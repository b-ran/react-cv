import React from 'react';
import Header from './components/Header';
import './CV.css';

export default class CV extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wrapper'>
                    <Header/>
                </div>
            </div>
        )
    }
}
