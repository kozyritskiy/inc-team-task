import React, { Component } from 'react'

import {Link } from 'react-router-dom';
import Table from '../table';

import {ControlTaskTracksManage} from '../controls';

export default class Track extends Component {
  render() {

    const {onItemDelete,onItemEdit,togglePopup,currentUserTrack} = this.props;

    return (
        <div className='members-task'>
            <div className='members-task__header'>
                <h3 className='members-task__tittle'>This is your task tracks:</h3>
                <Link className='members-task__link' to="/user-tasks">Back</Link>
            </div>
            <Table data={currentUserTrack}>
                <ControlTaskTracksManage
                    onItemDelete={onItemDelete}
                    onItemEdit={onItemEdit}
                    togglePopup={togglePopup}/>
            </Table>
        </div>
    )
  }
}



