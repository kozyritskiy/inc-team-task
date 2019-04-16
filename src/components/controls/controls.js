import React from 'react';
import {Link } from 'react-router-dom';

const ControlMembersManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems}) => {
    return (<td className='control-ceil tbody-ceil'>
        <div className='control-ceil__links'>
            <Link className='control-ceil__link' to="/">Progress</Link>
            <Link className='control-ceil__link'  to="/">Tasks</Link>
        </div>
        <div className='control-ceil__btns'>
            <button className='control-ceil__btn'  onClick={() => {togglePopup('member');onItemEdit(id, dataItems,'currentMember')}}>Edit</button>
            <button className='control-ceil__btn control-ceil__btn_color_delete'  onClick={() =>onItemDelete(id, 'membersManage')}>Delete</button>
        </div>
    </td>);
  };

const ControlTasksManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems}) => {
    return (<td className='control-ceil tbody-ceil'>
                <div className='control-ceil__btns'>
                    <button className='control-ceil__btn' onClick={() => {togglePopup('task');onItemEdit(id, dataItems,'currentTask')}}>Edit</button>
                    <button className='control-ceil__btn control-ceil__btn_color_delete' onClick={() => onItemDelete(id, 'tasksManage')}>Delete</button>
                </div>
            </td>);
};

const ControlMembersTaskManage = () => {
    return (<td>
        <div><Link to="/">Track</Link></div>
    </td>);
  };

const ControlTaskTracksManage = ({onItemDelete,onItemEdit,id,togglePopup,dataItems}) => {
    return (<td>
        <div><button onClick={() => {togglePopup('track');onItemEdit(id, dataItems,'currentTrack')}}>Edit</button></div>
        <div><button onClick={() => onItemDelete(id, 'taskTracksManage')}>Delete</button></div>
    </td>);
};

const ControlAdmin = () => {
    return (<td>
        <div><Link to="/">Success</Link></div>
        <div><Link to="/">Fail</Link></div>
    </td>);
};

export {ControlMembersManage,
        ControlTasksManage,
        ControlMembersTaskManage,
        ControlTaskTracksManage,
        ControlAdmin}