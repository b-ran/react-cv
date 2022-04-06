import React from 'react';

interface Props {
    title: string;
}

export default class SideItem extends React.Component<Props> {
    render() {
        return (

            <div className='side-item'>
                <h3 className='side-item-title'>{this.props.title}</h3>
                <div className='side-item-body'>
                    {this.props.children}
                </div>

            </div>
        )
    }
}