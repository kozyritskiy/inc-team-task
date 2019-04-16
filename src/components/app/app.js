import React, { Component } from "react";


import Entry from '../entry'
import Table from '../table'
import Header from '../header'
import {Members, Tasks} from '../pages'

import {MemberForm,TaskForm,TaskTrackForm} from '../forms'

// import "./app.scss";

import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {

    maxId = 100;

    state = {
        isAdmin: true,
        showPopup: false,
        openRegister: false,
        openCreate: false,
        openTrack: false,
        currentMember: {},
        currentTask: {},
        currentTrack:{},
        membersManage: [
            { id: 1, name:'ivan ivanov', direction:'Java', education:'BSU',start:'04.12.2017', age:'21'},
            { id: 2, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
            { id: 21, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
            { id: 22, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
            { id: 23, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
            { id: 24, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
            { id: 25, name:'perya petrov', direction:'.NET', education:'BSUIR',start:'10.12.2017', age:'22'},
           
        ],
        tasksManage:[
            {id:3, task:'Create the DB', start:'06.12.2017', deadline:'12.12.2017'},
            {id:4, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:41, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:42, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:43, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:44, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:45, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:46, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},
            {id:47, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017'},

        ],
        memberProgress: [
            {id:5, task:'create the DB', note:'implemented the TaskState table', date:'12.12.2017'},
            {id:6, task:'create the DB', note:'created the Mamber view', date:'13.12.2017'},
            {id:7, task:'implement the proc', note:'implemented the calc progress proc', date:'15.12.2017'}
        ],
        membersTaskManage:[
            {id:8, task:'Create the DB', start:'06.12.2017', deadline:'12.12.2017', status: 'Sucess'},
            {id:9, task:'Implement the procs', start:'12.12.2017', deadline:'20.12.2017', status: 'Active'},
        ],
        taskTracksManage: [
            {id:10, task:'create the DB', note:'Today i was working hard on ...', date:'12.12.2017'},
            {id:11, task:'Implement the procs', note:`I've finished the proc...`, date:'13.12.2017'},
        ],
    }

    onItemAdd = (creator, typeOfItems, typeOfCurrentItem, ...property) => {
        this.setState((state) => {
            const item = creator(...property);
            if (Object.keys(state[typeOfCurrentItem]).length !== 0) {
                const items = state[typeOfItems].map(editItem => {
                    return editItem.id === state[typeOfCurrentItem].id ? item : editItem;
                });
                return {[typeOfItems] : [...items]};
              }
            return { [typeOfItems]: [...state[typeOfItems], item] };
        })
    }

    onItemDelete = (id,type) => {
        this.setState((state) => {
            const idx = state[type].findIndex((item) => item.id === id);
            const items = [
                ...state[type].slice(0, idx),
                ...state[type].slice(idx + 1)
            ];
            return { [type] : [...items] };
        });
    }

    onItemEdit = (id, items, typeOfCurrentItem) => {
        const currentItem = items.find(item => item.id === id);
        this.setState({ [typeOfCurrentItem] : currentItem });
    }

    clearCurrentItem = (typeOfCurrentItem) =>{
        this.setState({ [typeOfCurrentItem]: {} });
    }

    createTask(task, start, deadline) {
        return {
          id: ++this.maxId,
          task,
          start,
          deadline
        };
    }

    createMember(name, direction, education, start, age) {
        return {
          id: ++this.maxId,
          name,
          direction,
          education,
          start,
          age
        };
    }

    createTrack(task, note, date) {
        return {
          id: ++this.maxId,
          task,
          note,
          date
        };
    }

    togglePopup = (form) => {
        this.setState((state) => {
            const showPopup = !state.showPopup;
            let openRegister,openCreate,openTrack;
            form === 'member' ? 
                openRegister = !state.openRegister : 
                    form === 'task' ? 
                        openCreate = !state.openCreate :
                            form === 'track' ? 
                                openTrack = !state.openTrack : openCreate = false;
            return {showPopup,openRegister,openCreate,openTrack};
        })
      }

    render() {

        const {membersManage, tasksManage,
            memberProgress, membersTaskManage,
            taskTracksManage, isAdmin,
            showPopup, openRegister,
            openCreate, openTrack,
            currentMember, currentTask,
            currentTrack } = this.state;

        let controlTaskManage;

        // isAdmin ? 
        //     controlTaskManage = 
        //     <React.Fragment>
        //         <ControlMembersTaskManage />
        //         <ControlAdmin />
        //     </React.Fragment> :
        //         controlTaskManage = <ControlMembersTaskManage />;
        
        const memberForm = <MemberForm closePopup={this.togglePopup} 
                                onItemAdd={this.onItemAdd}
                                typeOfItem='membersManage'
                                typeOfCurrentItem='currentMember'
                                currentItem={currentMember}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createMember.bind(this)}/>;

        const taskForm = <TaskForm closePopup={this.togglePopup} 
                                onItemAdd={this.onItemAdd}
                                typeOfItem='tasksManage'
                                typeOfCurrentItem='currentTask'
                                currentItem={currentTask}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createTask.bind(this)}/> ;

        const trackForm = <TaskTrackForm closePopup={this.togglePopup}
                                onItemAdd={this.onItemAdd}
                                typeOfItem='taskTracksManage'
                                typeOfCurrentItem='currentTrack'
                                currentItem={currentTrack}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createTrack.bind(this)}/>;

        return (
            <Router>
                <div className='wrapper'>
                    <main className='main-content'>
                        <Header />
                        <div className='container'>
                            <Switch>
                                <Route path='/' render={() =>(<h2 className='app__title'>Welcome to App</h2>)} exact />
                                
                                <Route path='/members' render={() =><Members membersManage={membersManage}
                                                                        togglePopup={this.togglePopup}
                                                                        onItemDelete={this.onItemDelete}
                                                                        onItemEdit={this.onItemEdit}/>} />
                                <Route path='/tasks' render={() =><Tasks tasksManage={tasksManage}
                                                                        togglePopup={this.togglePopup}
                                                                        onItemDelete={this.onItemDelete}
                                                                        onItemEdit={this.onItemEdit}/>} />
                            </Switch>
                            
                        

                            {/* <TrackBtn togglePopup={this.togglePopup}/>
                            <Table data={taskTracksManage}>
                                <ControlTaskTracksManage 
                                    onItemDelete={this.onItemDelete}
                                    onItemEdit={this.onItemEdit}
                                    togglePopup={this.togglePopup}/>
                            </Table> */}
                           
                            {/* <Table data={memberProgress}/>

                            <Table data={membersTaskManage}>{controlTaskManage}</Table> */}

                           

                            {(showPopup && openRegister) ? 
                                memberForm :
                                    (showPopup && openCreate) ? 
                                        taskForm : 
                                            (showPopup && openTrack) ? 
                                                trackForm : null}
                        </div>
                        </main>
                </div>
            </Router>
        )
    }
}





