import React, { Component } from 'react'

export default class TaskTrackDetailForm extends Component {

    state = {
        task: '',
        note: '',
        date: ''
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
        const {onItemAdd,closePopup,creator,typeOfItem,typeOfCurrentItem,clearCurrentItem} = this.props;
        const {task, date, note} = this.state;
        onItemAdd(creator,typeOfItem,typeOfCurrentItem,task, note, date);
        closePopup();
        clearCurrentItem('currentTrack');
    }

    onBackToGrid = () => {
        const {closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentTrack');
    }

    componentDidMount(){
        if (Object.keys(this.props.currentItem).length !== 0) {
            const { task, date, note } = this.props.currentItem;
            this.setState({
                task,
                note,
                date
            });
        }
    }

  render() {

    const {task, date, note} = this.state;

    return (
        <form className='form-login' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form-title'>Task Track - Create the DB</h3>
            <fieldset>  
                <div className='form-group'>
                    <label htmlFor="track-date">Name</label>
                    <input type="text" 
                        id="track-name" 
                        name="task" 
                        value={task}
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="track-date">Date</label>
                    <input type="date" 
                        id="track-date" 
                        name="date" 
                        value={date}
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Note</label>
                    <textarea rows="4" 
                        cols="50" 
                        name='note' 
                        value={note}
                        onChange={this.onChange} 
                        required></textarea>
                </div>
                <button type='submit'>Save</button>
                <button onClick={this.onBackToGrid}>Back to grid</button>
            </fieldset>
        </form>
    )
  }
}
