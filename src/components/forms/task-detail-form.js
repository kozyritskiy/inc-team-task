import React, { Component } from 'react'

export default class TaskDetailForm extends Component {
    maxId = 9000;
    state = {
        taskId: ++this.maxId,
        name: '',
        description: '',
        startDate: '',
        deadlineDate: '',
        members: []
    }
    
    onChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    onChangeCheck = e => {
        const name = e.target.name;
        const value = e.target.value;
        
        const checkMembers = this.state.members.every((item) => {
            return item !== name  
        })
        if(checkMembers){
            this.setState((state) => {
                return { members : [...state.members, name] };
            });
            
        }else{
            const idx = this.state.members.findIndex((item) => item === name);
            const items = [
                ...this.state.members.slice(0, idx),
                ...this.state.members.slice(idx + 1)
            ];
           
            this.setState((state) => {
                return { members : items };
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const {onItemAdd,closePopup,creator,typeOfItem,typeOfCurrentItem,clearCurrentItem} = this.props;
        const {name, description, startDate, deadlineDate, taskId, members} = this.state;
        onItemAdd(creator,typeOfItem,typeOfCurrentItem, taskId,name, description,startDate, deadlineDate);
        closePopup();
        clearCurrentItem('currentTask');
    }

    onBackToGrid = () => {
        const {closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentTask');
    }


    // componentDidMount(){
    //     if (Object.keys(this.props.currentItem).length !== 0) {
    //         const { task, start, deadline } = this.props.currentItem;
    //         this.setState({
    //             task,
    //             start,
    //             deadline
    //         });
    //     }
    // }

    componentDidUpdate(prevProps) {    
        if (this.props.currentItem !== prevProps.currentItem) {
            const {id, name, description, startDate, deadlineDate } = this.props.currentItem;
            this.setState({
                taskId:id,
                name,
                description,
                startDate,
                deadlineDate
            });
        };
    }
    
    
  render() {
    console.log(this.state.members);
    const {name, description, startDate, deadlineDate, members} = this.state;

    const {openEdit, openCreate,membersManage} = this.props;

    let formTitle;

    openEdit ? 
        formTitle = `Task - ${name}`:
            openCreate ? 
                formTitle = `Hi, fill the form please` : 
                    formTitle = null;

    return (
        <form className='form form__task' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form__title'>{formTitle}</h3>
            <fieldset className='form__fieldset'>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Name</label>
                    <input className='form__input'
                        type="text" 
                        id="task-name" 
                        name='name' 
                        placeholder='Task name'
                        value={name} 
                        onChange={this.onChange} 
                        required />
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Description</label>
                    <textarea className='form__input form__area'
                        rows="4" 
                        cols="50" 
                        name='description'
                        placeholder='Description of task'
                        value={description} 
                        onChange={this.onChange} 
                        required>
                    </textarea>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="start">Start</label>
                    <input className='form__input'
                        type="date" 
                        id="" 
                        name="startDate" 
                        value={startDate} 
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="start">Deadline</label>
                    <input className='form__input'
                        type="date" 
                        id="" 
                        name="deadlineDate" 
                        value={deadlineDate}
                        onChange={this.onChange} 
                        required></input>
                </div>
                <div className='form__group'>
                    <h5>Members</h5>
                    <CheckMembers membersManage={membersManage} members={members} onChange={this.onChangeCheck}/>
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


const CheckMembers = ({membersManage,onChange}) => {
    console.log(membersManage);
    
    const checks = membersManage.map((member) => {
        const {name,id} = member;
        
        return  <div key={id}>
                    <label htmlFor="">{name}</label>
                    <input type="checkbox" name={id} onChange={onChange}/><br/>
                </div> ;
      });

    return (
      <div className='members-check-list'>{checks}</div>
    )
  }