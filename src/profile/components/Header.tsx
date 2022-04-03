import React from 'react';
import './Header.less';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='name'>
                    <h2>Brandon Scott-Hill</h2>
                    <h3>Software Engineer</h3>
                </div>
                <div className='links'>
                    <ul>
                        <li>
                            <a className='link' href='tel:#'>027 766 6505</a>
                        </li>
                    </ul>
                </div>
            </div>



        )
    }
}
