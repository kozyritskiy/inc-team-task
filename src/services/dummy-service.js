export default class DummyService {

    
    users = [
        { userId: 1, name:'Jhon Jhonnov', direction:'Java', education:'BSU',start:'2004-04-04', age:'19'},
        { userId: 2, name:'ALex Alexov', direction:'C++', education:'BSUIR',start:'2005-05-05', age:'20'},
    ];

    fullUsers = [
        {   userId: 1, direction: 'Java', name: 'Jhon', 
            email: 'jhon@gmail.com', lastName: 'Jhonov', sex: 'male', 
            education: 'BSU', birthdate: '1999-01-01', score: '20', 
            math: '30', address: 'ul.Pushkina 22', mobile: '121-32-32', 
            skype:'skype_jhon', start:'2004-04-04', telegram:'@telega' },
        {   userId: 2, direction: 'C++', name: 'Alex', 
            email: 'alex@gmail.com', lastName: 'Alexov', sex: 'male', 
            education: 'BSUIR', birthdate: '1993-05-05', score: '50', 
            math: '10', address: 'ul.Pushkina 42', mobile: '321-32-32', 
            skype:'skype_alex', start:'2004-05-05', telegram:'@telega_alex' }
    ];

    tasks = [{taskId: 3, name: 'Create the DB', 
            description:'description of create the DB', 
            startDate:'2004-01-01', deadlineDate:'2001-01-01'},
            {taskId: 4, name: 'Implement the proc', 
            description:'description of implement the proc', 
            startDate:'2001-03-01', deadlineDate:'2001-03-05'},
            {taskId: 5, name: 'Create task #1', 
            description:'description of create task #1', 
            startDate:'2001-05-01', deadlineDate:'2001-05-01'},
            {taskId: 6, name: 'Create task #2', 
            description:'description of create task #2', 
            startDate:'2002-05-01', deadlineDate:'2002-05-01'},
        ];

    userTasks = [
        {userId: 1, taskId: 3, taskName:'Create the DB', 
        startDate: '2004-01-01', deadlineDate:'2001-01-01', state:'Active'},
        {userId: 1, taskId: 4, taskName:'Implement the proc', 
        startDate: '2001-03-01', deadlineDate:'2001-03-05', state:'Active'},
        {userId: 2, taskId: 5, taskName:'Create task #1', 
        startDate: '2001-05-01', deadlineDate:'2001-05-01', state:'Active'},
        {userId: 2, taskId: 6, taskName:'Create task #2', 
        startDate: '2002-05-01', deadlineDate:'2002-05-01', state:'Active'},
    ];

    userProgresses = [
        {userId:1, taskId: 3, taskName:'create the DB', trackNote:'implemented the TaskState table', trackDate:'2001-05-01'},
        {userId:1, taskId: 3, taskName:'create the DB', trackNote:'created the Mamber view', trackDate:'2001-05-01'},
        {userId:1, taskId: 4, taskName:'implement the proc', trackNote:'implemented the calc progress proc', trackDate:'2001-05-01'},
        {userId:2, taskId: 5, taskName:'implement subtask #1', trackNote:'implement subtask #1 - note', trackDate:'2001-05-01'},
        {userId:2, taskId: 5, taskName:'implement subtask #1-1', trackNote:'implement subtask #1-1 - note', trackDate:'2001-05-01'},
        {userId:2, taskId: 6, taskName:'implement subtask #2', trackNote:'implement subtask #2 - note', trackDate:'2001-05-01'}
    ];

    taskTracks = [
        {userId:1, taskId:3, trackId:50, taskName:'create the DB', trackNote:'Today i was working hard on ...', trackDate:'2001-05-01'},
        {userId:1, taskId:3, trackId:51, taskName:'Implement the procs', trackNote:`I've finished the proc...`, trackDate:'2001-05-01'},
        {userId:1, taskId:4, trackId:52, taskName:'create the note #1', trackNote:'Today i was working easy on ...', trackDate:'2001-05-01'},
        {userId:1, taskId:4, trackId:53, taskName:'create the note #2', trackNote:`I've finished the work...`, trackDate:'2001-05-01'},
        {userId:2, taskId:5, trackId:54, taskName:'create the something', trackNote:'Today i was working hard on ...', trackDate:'2001-05-01'},
        {userId:2, taskId:5, trackId:55, taskName:'Implement the something', trackNote:`I've finished the proc...`, trackDate:'2001-05-01'},
        {userId:2, taskId:6, trackId:56, taskName:'create the something #1', trackNote:'Today i was working easy on ...', trackDate:'2001-05-01'},
        {userId:2, taskId:6, trackId:57, taskName:'create the something #2', trackNote:`I've finished the work...`, trackDate:'2001-05-01'},
    ];

    tracks = [
        {trackId:50, taskName:'create the DB', trackNote:'Today i was working hard on ...', trackDate:'2001-05-01'},
        {trackId:51, taskName:'Implement the procs', trackNote:`I've finished the proc...`, trackDate:'2001-05-01'},
        {trackId:52, taskName:'create the note #1', trackNote:'Today i was working easy on ...', trackDate:'2001-05-01'},
        {trackId:53, taskName:'create the note #2', trackNote:`I've finished the work...`, trackDate:'2001-05-01'},
        {trackId:54, taskName:'create the something', trackNote:'Today i was working hard on ...', trackDate:'2001-05-01'},
        {trackId:55, taskName:'Implement the something', trackNote:`I've finished the proc...`, trackDate:'2001-05-01'},
        {trackId:56, taskName:'create the something #1', trackNote:'Today i was working easy on ...', trackDate:'2001-05-01'},
        {trackId:57, taskName:'create the something #2', trackNote:`I've finished the work...`, trackDate:'2001-05-01'},
    ]
    

    getTrack = async (id) => {
        return this.tracks.find(item => item.trackId === id.trackId);  
    }


    getTaskTracks = async () => {
        return this.taskTracks;
    }

    getUserProgress = async () => {
        return this.userProgresses;
    }

    getUserTasks = async () => {
        return this.userTasks;
    }

    getTasks = async () => {
        return this.tasks;
    };

    getTask = async (id) => {
        return this.tasks.find(item => item.taskId === id);  
    };

    getUsers = async () => {
        return this.users;
    };
  
    getUser = async (id) => {
        return this.fullUsers.find(item => item.userId === id);
    };

  }
  