import React, { Component } from 'react'

export default class TaskDetailForm extends Component {

    state = {
        task: '',
        desc: '',
        start: '',
        deadline: '',
        members: ''
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
        const {task, desc, start, deadline, members} = this.state;
        onItemAdd(creator,typeOfItem,typeOfCurrentItem,task, start, deadline);
        closePopup();
        clearCurrentItem('currentTask');
    }

    onBackToGrid = () => {
        const {closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentTask');
    }

    componentDidMount(){
        if (Object.keys(this.props.currentItem).length !== 0) {
            const { task, start, deadline } = this.props.currentItem;
            this.setState({
                task,
                start,
                deadline
            });
        }
    }
    
  render() {

    const {task, desc, start, deadline, members} = this.state;

    return (
        <form className='form form__task' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form__title'>Task - Create the DB</h3>
            <fieldset className='form__fieldset'>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Name</label>
                    <input className='form__input'
                        type="text" 
                        id="task-name" 
                        name='task' 
                        placeholder='Task name'
                        value={task} 
                        onChange={this.onChange} 
                        required />
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Description</label>
                    <textarea className='form__input form__area'
                        rows="4" 
                        cols="50" 
                        name='desc'
                        placeholder='Description of task'
                        value={desc} 
                        onChange={this.onChange} 
                        required>
                    </textarea>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="start">Start</label>
                    <input className='form__input'
                        type="date" 
                        id="start-task" 
                        name="start" 
                        value={start} 
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="start">Deadline</label>
                    <input className='form__input'
                        type="date" 
                        id="end-task" 
                        name="deadline" 
                        value={deadline}
                        onChange={this.onChange} 
                        required></input>
                </div>
                {/* <div className='form__group'>
                    <label htmlFor="">Members</label>
                    <div className='members-check-list'>
                        <label htmlFor="">Ivan Ivanov</label>
                        <input type="checkbox" name="id-1" value="ivan ivanov"/><br/>
                        <label htmlFor="">Petya Petrov</label>
                        <input type="checkbox" name="id-2" value="petya petrov"/><br/>
                    </div>
                </div>              */}
                <div className='form__btns'>
                    <button className='form__btn form__btn_color_save' type='submit'>Save</button>
                    <button className='form__btn form__btn_color_back' onClick={this.onBackToGrid}>Back to grid</button>
                </div>
            </fieldset>
        </form>
    )
  }
}
