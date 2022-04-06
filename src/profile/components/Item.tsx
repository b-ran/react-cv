import React from 'react';

interface Props {
  title: string;
  context: string;
}

export default class Item extends React.Component<Props> {
    render() {
        return (

            <div className='item'>
                <div className='item-heading'>
                    <h4 className='item-title'>{this.props.title}</h4>
                    <div className='item-context'>{this.props.context}</div>
                </div>
                <div className='item-body'>
                    {this.props.children}
                </div>

            </div>
        )
    }
}