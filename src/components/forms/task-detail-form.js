import React, { Component } from 'react'

export default class TaskDetailForm extends Component {
    maxId = 9000;
    state = {
        taskId: ++this.maxId,
        name: '',
        description: '',
        startDate: '',
        deadlineDate: '',
        members: {}
    }
    
    onChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    checkedMembers = (members) => {
        let result = [];
        for (let member in members){
            if(members[member]){
                result.push(member);
            }
        }
        return result;
    }


    onChangeCheck = (e) => {
        this.setState({
            members: {...e}
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {onItemAdd,closePopup,creator,typeOfItem,typeOfCurrentItem,clearCurrentItem,addUserTasks} = this.props;
        const {name, description, startDate, deadlineDate, taskId, members} = this.state;
        onItemAdd(creator,typeOfItem,typeOfCurrentItem, taskId,name, description,startDate, deadlineDate);
        const checkedMembers = this.checkedMembers(members);
        if(checkedMembers.length !== 0){
            checkedMembers.forEach(member => {
                const task = {id: {userId: +member,taskId},taskName:name,startDate,deadlineDate, state: 'Active'};
                addUserTasks(task);
            });
        }
        closePopup();
        clearCurrentItem('currentTask');
    }

    onBackToGrid = () => {
        const {closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentTask');
    }


    componentDidMount(){
        const {checkedUsers} = this.props;
        this.setState({members:checkedUsers});
        // if (Object.keys(this.props.currentItem).length !== 0) {
        //     const { task, start, deadline } = this.props.currentItem;
        //     this.setState({
        //         task,
        //         start,
        //         deadline
        //     });
        // }
    }

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
    // console.log(this.state.members);
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
                    <CheckMembers membersManage={membersManage} 
                                    members={members} 
                                    onChange={this.onChangeCheck}/>
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



const CheckMembers = ({membersManage,onChange, members}) => {
    
    let checkMembers = membersManage.reduce((result,{id}) => {
        return {...result,[id] : !!members[id]}
    },{});
    const checkMembersChange = (id) => () => {
        checkMembers[id] = !checkMembers[id];
        onChange(checkMembers)
    }
    
    const checks = membersManage.map((member) => {
        const {name,id} = member;
        
        return  <div key={id}>
                    <label htmlFor="">{name}</label>
                    <input type="checkbox" name={id} 
                        checked={checkMembers[id]} 
                        onChange={checkMembersChange(id)}/><br/>
                </div> ;
      });
      
    return (
      <div className='members-check-list'>{checks}</div>
    )
  }

//   onChange(e = {}, taskId) {
//     this.state.members = this.state.members.map(member => {
//        const isChecked = e[member.id];
//        const isPreviousCheckedValue = !!member.tasks.find(id => id === taskId);
//        if (isChecked !== isPreviousCheckedValue) {
//            const tasks = isChecked ? [...member.tasks, taksId] : member.tasks.filter(taks => task !== taskId);
//            return {...member, tasks}
//        }
//        return member;	
//    })
//    }
   
   
//    ({taskId, managedMembers, onChange})
//    // tasks - массив из айдишек тасок, привязанных к юзеру на момент открытия попапа
//    let checksdMembers = managedMembers.reduce((result, {id, tasks}) => {
//        const = defaultIsChecked = tasks.find((membertaskId) => memberTaskId === taskId) !== undefined;
//        return {...result, [id]: defaultIsChecked};
//    }, {})
   
   
   
//    ({task, managedMembers, onChange})
//    // users - массив из айдишек юзеров, привязанных к такске на момент открытия попапа
//    let checksdMembers = managedMembers.reduce((result, {id}) => {
//        const {users = []} = task;
//        const = defaultIsChecked = users.find((userId) => userId === id) !== undefined;
//        return {...result, [id]: defaultIsChecked};
//    }, {})