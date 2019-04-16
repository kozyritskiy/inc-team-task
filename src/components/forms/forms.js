import withPopup from '../hoc-helpers';

import MemberDetailForm from './member-detail-form';
import TaskDetailForm from './task-detail-form';
import TaskTrackDetailForm from './task-track-detail-form';

import './forms.scss';

const MemberForm = withPopup(MemberDetailForm);
const TaskForm = withPopup(TaskDetailForm);
const TaskTrackForm = withPopup(TaskTrackDetailForm);


export {MemberForm,TaskForm,TaskTrackForm};