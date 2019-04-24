import React from 'react';

import './btns.scss';

const RegBtn = ({togglePopup}) => {
    return (
        <button className='btn-reg' onClick={() => togglePopup('member')}>Register</button>
    )
};
const CreateBtn = ({togglePopup,clearCurrentItem}) => {
    return (
        <button className='btn-crt' onClick={() => {togglePopup('task');clearCurrentItem('checkedUsers')}}>Create</button>
    )
};
const TrackBtn = ({togglePopup}) => {
    return (
        <button onClick={() => togglePopup('track')}>Track</button>
    )
};

export { RegBtn, CreateBtn, TrackBtn}