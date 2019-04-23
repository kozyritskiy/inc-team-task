import React, { Component } from 'react'

import {Link } from 'react-router-dom';
import Table from '../table';

export default class Progress extends Component {
  render() {
    
    const {memberProgress,currentUserName} = this.props;

    return (
        <div className='members-task'>
            <div className='members-task__header'>
                <h3 className='members-task__tittle'>{currentUserName}'s progress:</h3>
                <Link className='members-task__link' to="/members">Back</Link>
            </div>
            <Table data={memberProgress}/>
        </div>
    )
  }
}
