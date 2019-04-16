import React, { Component } from 'react'

import {CreateBtn} from '../btns'
import Table from '../table'
import {ControlTasksManage} from '../controls'

export default class Tasks extends Component {
  render() {
    const {tasksManage,
            togglePopup,
            onItemDelete,
            onItemEdit} = this.props;
    return (
      <div className='tasks'>
        <div className='tasks__header'>
            <div className='tasks__count'>TASKS COUNT</div>
            <CreateBtn togglePopup={togglePopup}/>
        </div>
        <Table data={tasksManage}>
            <ControlTasksManage 
                onItemDelete={onItemDelete}
                onItemEdit={onItemEdit}
                togglePopup={togglePopup}/>
        </Table>
      </div>
    )
  }
}
