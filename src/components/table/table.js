import React, { Component } from 'react';

import HeadRow from '../head-row';
import TableBody from '../table-body';

import './table.scss';

export default class Table extends Component {

  render() {
    const {data} = this.props;
    const control = this.props.children;
    
    return (
            <table className='table'>
                <thead>
                    <HeadRow items={data} control={control}></HeadRow>
                </thead>
                <TableBody items={data} control={control}/>
            </table>
    )
  }
}





