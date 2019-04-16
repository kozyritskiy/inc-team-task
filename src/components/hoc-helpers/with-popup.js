import React, { Component } from 'react'

import "./with-popup.scss";

const withPopup = (View) => {
    return class extends Component {
        render() {
            return(
                <div className='popup'>
                    <div className='popup_inner'>
                        <View {...this.props}/>
                    </div>
                </div>
            ) 
        }
    }
}

export default withPopup;