import React from 'react';
import {Link } from 'react-router-dom';

const ControlMembersManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems,getUserTasks, getUserName, getUserProgress}) => {
    return (<td className='control-ceil tbody-ceil'>
        <div className='control-ceil__links'>
            <Link onClick={() => {getUserProgress(id);getUserName(id)}} className='control-ceil__link' to="/user-progress">Progress</Link>
            <Link onClick={() => {getUserTasks(id);getUserName(id)}} className='control-ceil__link'  to="/user-tasks">Tasks</Link>
        </div>
        <div className='control-ceil__btns'>
            <button className='control-ceil__btn'  onClick={() => {togglePopup('editReg');onItemEdit(id, dataItems,'currentMember')}}>Edit</button>
            <button className='control-ceil__btn control-ceil__btn_color_delete'  onClick={() =>onItemDelete(id, 'membersManage')}>Delete</button>
        </div>
    </td>);
  };

const ControlTasksManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems}) => {
    return (<td className='control-ceil tbody-ceil'>
                <div className='control-ceil__btns'>
                    <button className='control-ceil__btn' onClick={() => {togglePopup('editCrt');onItemEdit(id, dataItems,'currentTask')}}>Edit</button>
                    <button className='control-ceil__btn control-ceil__btn_color_delete' onClick={() => onItemDelete(id, 'tasksManage')}>Delete</button>
                </div>
            </td>);
};

const ControlTaskTracksManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems}) => {
    return (<td className='control-ceil tbody-ceil'>
        <div className='control-ceil__btns'>
                <button className='control-ceil__btn' onClick={() => {togglePopup('track');onItemEdit(id, dataItems,'currentTrack')}}>Edit</button>
                <button className='control-ceil__btn control-ceil__btn_color_delete' onClick={() => onItemDelete(id, 'taskTracksManage')}>Delete</button>
        </div>
    </td>);
};

const ControlAdmin = ({id,toggleStatus,togglePopup,getUserTrack,getCurrentTrackId}) => {
    return (<td className='control-ceil tbody-ceil'>
        <div>
            <div className='control-ceil__track'>
                <button className='control-ceil__btn' onClick={() => {togglePopup('track');getCurrentTrackId(id)}}>Set Track</button>
                <Link className='control-ceil__btn' onClick={() => getUserTrack(id.taskId)} to="/user-track">Get Track</Link>
            </div>
            <div className='control-ceil__btns control-ceil__btns_admin'>
                <button onClick={() => toggleStatus(id.taskId, 'Success')}  className='control-ceil__btn  control-ceil__btn_color_success'>Success</button>
                <button onClick={() => toggleStatus(id.taskId, 'Fail')}  className='control-ceil__btn control-ceil__btn_color_delete'>Fail</button>
            </div>
        </div>
        
    </td>);
};

export {ControlMembersManage,
        ControlTasksManage,
        ControlTaskTracksManage,
        ControlAdmin}