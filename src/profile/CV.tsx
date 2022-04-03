import React from 'react';
import Title from './components/Title';
import './CV.css';

export default class CV extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wrapper'>
                    <Title/>
                </div>
            </div>
        )
    }
}
