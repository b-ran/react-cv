import React from 'react';
import Link from './Link';

export default class Title extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='title'>
                    <h2 className='name'>Brandon Scott-Hill</h2>
                    <h3 className='tag'>Software Engineer</h3>
                </div>
                <div className='links'>
                    <ul className='list'>
                        <Link href='mailto:#' text='bran.scotthill@gmail.com'/>
                        <Link href='https://github.com/b-ran' text='github.com/b-ran'/>
                        <Link href='https://linkedin.com/in/brandon-scotthill' text='linkedin.com/in/b-ran'/>
                    </ul>
                </div>
                <hr/>
            </div>

        )
    }
}
