import React from 'react';
import './Link.css';

interface Props {
    href: string;
    text: string;
}

export default class Link extends React.Component<Props> {
    render() {
        return (
            <li>
                <a className='link' href={this.props.href}>{this.props.text}</a>
            </li>
        )
    }
}