import React, { Component } from 'react';

import {RegBtn} from '../btns';
import Table from '../table';
import {ControlMembersManage} from '../controls';

import './members.scss';

export default class Members extends Component {
  render() {
    const {membersManage,
            togglePopup,
            onItemDelete,
            onItemEdit,
            getUserTasks,
            getUserName,
            getUserProgress} = this.props;
    return (
      <div className='members'>
        <div className='members__header'>
            <div className='members__count'>MEMBERS OF INCUBATOR</div>
            <RegBtn togglePopup={togglePopup}/>
        </div>
        <Table data={membersManage}>
            <ControlMembersManage 
                onItemDelete={onItemDelete}
                onItemEdit={onItemEdit}
                togglePopup={togglePopup}
                getUserTasks={getUserTasks}
                getUserName={getUserName}
                getUserProgress={getUserProgress}/>
        </Table>
      </div>
    )
  }
}
