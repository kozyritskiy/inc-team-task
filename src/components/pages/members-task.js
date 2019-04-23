import React, { Component } from 'react'

import {Link } from 'react-router-dom';
import Table from '../table';

import {ControlAdmin} from '../controls';

import './members-task.scss';

export default class MembersTask extends Component {
    
  render() {
    const {data,toggleStatus,currentUserName,togglePopup,getUserTrack,getCurrentTrackId} = this.props;
  
    return (
        <div className='members-task'>
            <div className='members-task__header'>
                <h3 className='members-task__tittle'>Hi, dear {currentUserName}! This is your current tasks:</h3>
                <Link className='members-task__link' to="/members">Back</Link>
            </div>
            <Table data={data}><ControlAdmin togglePopup={togglePopup} 
                                            toggleStatus={toggleStatus} 
                                            getUserTrack={getUserTrack}
                                            getCurrentTrackId={getCurrentTrackId}/>
            </Table>
        </div>
    )
  }
}
