import React, { Component } from 'react'

export default class TaskTrackDetailForm extends Component {
    uniqId = 200;
    state = {
        taskTrackId: ++ this.uniqId,
        taskName: '',
        trackNote: '',
        trackDate: ''
    }
    
    onChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {onItemAdd,closePopup,creator,typeOfItem,typeOfCurrentItem,clearCurrentItem,currentTrackId} = this.props;
        console.log(currentTrackId);
        const {userId,taskId} = currentTrackId;
        const {taskName, trackDate, trackNote,taskTrackId} = this.state;
        onItemAdd(creator,typeOfItem,typeOfCurrentItem,userId,taskId,taskTrackId,taskName, trackNote, trackDate);
        closePopup();
        clearCurrentItem('currentTrack');
    }

    onBackToGrid = () => {
        const {closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentTrack');
    }

    // componentDidMount(){
    //     if (Object.keys(this.props.currentItem).length !== 0) {
    //         const { taskName, trackDate, trackNote} = this.props.currentItem;
    //         this.setState({
    //             taskName,
    //             trackDate,
    //             trackNote
    //         });
    //     }
    // }

    componentDidUpdate(prevProps) {    
        if (this.props.currentItem !== prevProps.currentItem) {
            const { taskName, trackDate, trackNote} = this.props.currentItem;
            this.setState({
                taskName,
                trackDate,
                trackNote
            });
        };
    }

  render() {

    const {taskName, trackDate, trackNote} = this.state;
    const {openEdit,openTrack} =this.props;
    let formTitle;

    openEdit ? 
        formTitle = `Track - ${taskName}`:
            openTrack ? 
                formTitle = `Hi, fill the form please` : 
                    formTitle = null;

    return (
        <form className='form form__track' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form__title'>{formTitle}</h3>
            <fieldset className='form__fieldset'>  
                <div className='form__group'>
                    <label className='form__label' htmlFor="track-date">Name</label>
                    <input className='form__input' type="text" 
                        id="track-name" 
                        name="taskName" 
                        value={taskName}
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="track-date">Date</label>
                    <input className='form__input' type="date" 
                        id="track-date" 
                        name="trackDate" 
                        value={trackDate}
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Note</label>
                    <textarea className='form__input form__area'
                        rows="4" 
                        cols="50" 
                        name='trackNote' 
                        value={trackNote}
                        onChange={this.onChange} 
                        required></textarea>
                </div>
            </fieldset>
            <div className='form__btns'>
                <button className='form__btn form__btn_color_save' type='submit'>Save</button>
                <button className='form__btn form__btn_color_back' onClick={this.onBackToGrid}>Back to grid</button>
            </div>
        </form>
    )
  }
}

