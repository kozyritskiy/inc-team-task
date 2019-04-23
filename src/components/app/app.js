import React, { Component } from "react";


import Entry from '../entry';
import Table from '../table';
import Header from '../header';
import {Members, Tasks, MembersTask, Progress, Track} from '../pages';

import {MemberForm,TaskForm,TaskTrackForm} from '../forms';

import {ControlTaskTracksManage} from '../controls';

import DummyService from '../../services/dummy-service';

// import "./app.scss";

import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {

    maxId = 100;

    state = {
        service: new DummyService(),
        isAdmin: true,
        showPopup: false,
        openRegister: false,
        openEditReg: false,
        openEditCrt: false,
        openCreate: false,
        openTrack: false,
        currentTrackId:{},
        currentUserTrack: [],
        currentMemberProgress: [],
        currentUserName: '',
        currentUserTasks: [],
        currentMember: {},
        currentTask: {},
        currentTrack:{},
        membersManage: [],
        tasksManage:[],
        memberProgress: [],
        membersTaskManage:[],
        taskTracksManage: [],
    }

    componentDidMount(){    
        const {service} = this.state;
        const users = service.getUsers();
        const tasks = service.getTasks();
        const userTasks = service.getUserTasks();
        const userProgress = service.getUserProgress();
        const taskTracks = service.getTaskTracks();

        users.then((res) => {
            const renameId = res.map((item) =>{
              const{userId, ...property} = item;
              return {'id': userId, ...property}
            });
            this.setState({ membersManage: renameId});
        });
        tasks.then((res) => {
            const renameId = res.map((item) =>{
              const{taskId, ...property} = item;
              return {'id': taskId, ...property}
            });
            this.setState({ tasksManage: renameId});
        });
        userTasks.then((res) => {
            const renameId = res.map((item) =>{
              const{userId,taskId, ...property} = item;
              return {'id':{'taskId':taskId, 'userId':userId} , ...property}
            });
            this.setState({ membersTaskManage: renameId});
        });
        userProgress.then((res) => {
            const renameId = res.map((item) =>{
                const{userId,taskId, ...property} = item;
                return {'id':{'taskId':taskId, 'userId':userId} , ...property}
            });
            this.setState({ memberProgress: renameId});
        });
        taskTracks.then((res) => {
            const renameId = res.map((item) =>{
                const{userId,taskId, ...property} = item;
                return {'id':{'taskId':taskId, 'userId':userId} , ...property}
            });
            this.setState({ taskTracksManage: renameId});
        });
    }

    getCurrentTrackId = (id) => {
        this.setState({ currentTrackId: id});
    }

    getUserTrack = (id) => {
        console.log(id);
        
        const {taskTracksManage} = this.state;
        console.log(taskTracksManage);
        
        const userTrack = taskTracksManage.filter((task) => {
            return task.id.taskId === id;
        });
        console.log(userTrack);
        this.setState({ currentUserTrack: userTrack});
    }

    getUserProgress = (id) => {
        const {memberProgress} = this.state;
        const userProgress = memberProgress.filter((progress) => {
            return progress.id.userId === id;
        });
        this.setState({ currentMemberProgress: userProgress});
    }

    getUserTasks = (id) => {
        const {membersTaskManage} = this.state;
        const userTasks = membersTaskManage.filter((task) => {
            return task.id.userId === id;
        });
        this.setState({ currentUserTasks: userTasks});
    }

    getUserName = (id) => {
        const {membersManage} = this.state;
        const user = membersManage.find((user) => {
            return user.id === id;
        });
        this.setState({ currentUserName: user.name});
    }

    toggleStatus = (id,status) => {
        const {currentUserTasks} = this.state;
        const task = currentUserTasks.find((task) =>{
            return task.id.taskId === id
        });
        task.state = status;
        const editTasks = currentUserTasks.map((item) => {
            return item.id.taskId === task.id.taskId ? task : item;
        });
        this.setState({ currentUserTasks: editTasks});
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
        });

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
        // const currentItem = items.find(item => item.id === id);
        // console.log(id);
        const {service} = this.state;
        let data;
        typeOfCurrentItem === 'currentMember' ?
            data = service.getUser(id) :
                typeOfCurrentItem === 'currentTask' ?
                    data = service.getTask(id) : data = null;
        
        data.then((result) => {
            let remaneIdObj;
            if (typeOfCurrentItem === 'currentMember'){
                const {userId, ...property} = result;
                remaneIdObj = {id:userId, ...property}
            }
            if (typeOfCurrentItem === 'currentTask'){
                const {taskId, ...property} = result;
                remaneIdObj = {id:taskId, ...property}
            }
            
            this.setState({ [typeOfCurrentItem]: remaneIdObj});
        })
        // this.setState({ [typeOfCurrentItem] : currentItem });
    }

    clearCurrentItem = (typeOfCurrentItem) =>{
        this.setState({ [typeOfCurrentItem]: {} });
    }

    createTask(taskId,name,description, startDate, deadlineDate) {
        return {
          id: taskId,
          name,
          description,
          startDate,
          deadlineDate
        };
    }

    createMember(userId, name, direction, education, start, age) {
        return {
          id: userId,
          name,
          direction,
          education,
          start,
          age
        };
    }

    createTrack(userId,taskId,taskName, trackNote, trackDate) {
        return {
          id:{
            userId,
            taskId
          },
          taskName,
          trackNote,
          trackDate
        };
    }

    togglePopup = (form) => {
        this.setState((state) => {
            const showPopup = !state.showPopup;
            let openRegister,openCreate,openTrack,openEditReg,openEditCrt;
            form === 'editCrt' ? 
                openEditCrt = !state.openEditCrt : 
                    form === 'member' ? 
                        openRegister = !state.openRegister : 
                            form === 'editReg' ? 
                                openEditReg = !state.openEditReg : 
                                    form === 'task' ? 
                                        openCreate = !state.openCreate :
                                            form === 'track' ? 
                                                openTrack = !state.openTrack : openCreate = false;
            return {showPopup,openRegister,openCreate,openTrack,openEditReg,openEditCrt};
        })
      }

    render() {
        // console.log(this.state);
        const {membersManage, tasksManage,
            memberProgress, membersTaskManage,
            taskTracksManage, isAdmin,
            showPopup, openRegister,
            openCreate, openTrack,
            currentMember, currentTask,
            currentTrack, openEditReg, currentUserTasks,
            currentUserName, getUserProgress, currentMemberProgress,
            currentUserTrack,currentTrackId,openEditCrt } = this.state;
        
        const memberForm = <MemberForm closePopup={this.togglePopup} 
                                onItemAdd={this.onItemAdd}
                                typeOfItem='membersManage'
                                typeOfCurrentItem='currentMember'
                                currentItem={currentMember}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createMember.bind(this)}
                                openEdit={openEditReg} openRegister={openRegister}/>;

        const taskForm = <TaskForm closePopup={this.togglePopup} 
                                onItemAdd={this.onItemAdd}
                                typeOfItem='tasksManage'
                                typeOfCurrentItem='currentTask'
                                currentItem={currentTask}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createTask.bind(this)}
                                openEdit={openEditCrt} openCreate={openCreate}
                                membersManage={membersManage}/> ;

        const trackForm = <TaskTrackForm closePopup={this.togglePopup}
                                onItemAdd={this.onItemAdd}
                                typeOfItem='taskTracksManage'
                                typeOfCurrentItem='currentTrack'
                                currentItem={currentTrack}
                                clearCurrentItem={this.clearCurrentItem}
                                creator={this.createTrack.bind(this)}
                                currentTrackId={currentTrackId}/>;


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
                                                                        onItemEdit={this.onItemEdit}
                                                                        getUserTasks={this.getUserTasks}
                                                                        getUserName={this.getUserName}
                                                                        getUserProgress={this.getUserProgress}/>} />
                                <Route path='/tasks' render={() =><Tasks tasksManage={tasksManage}
                                                                        togglePopup={this.togglePopup}
                                                                        onItemDelete={this.onItemDelete}
                                                                        onItemEdit={this.onItemEdit}/>} />
                                <Route path='/user-tasks' render={() =><MembersTask data={currentUserTasks} 
                                                                        currentUserName={currentUserName}
                                                                        toggleStatus={this.toggleStatus}
                                                                        togglePopup={this.togglePopup}
                                                                        getUserTrack={this.getUserTrack}
                                                                        getCurrentTrackId={this.getCurrentTrackId}/>} />
                                <Route path='/user-progress' render={() =><Progress memberProgress={currentMemberProgress} 
                                                                        currentUserName={currentUserName}/>} />
                                <Route path='/user-track' render={() =><Track currentUserTrack={currentUserTrack} 
                                                                        onItemDelete={this.onItemDelete}
                                                                        onItemEdit={this.onItemEdit}
                                                                        togglePopup={this.togglePopup}/>} />
                                                                        
                                                                        
                            </Switch>
                            
                            {(showPopup && openEditCrt) ? 
                                taskForm :
                                    (showPopup && openRegister) ? 
                                        memberForm :
                                            (showPopup && openEditReg) ? 
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





