import React, { Component } from 'react'


export default class MemberDetailForm extends Component {

    state = {
        name: '',
        lastName: '',
        age: '',
        direction: 'Java',
        education: 'BSU',
        start: ''
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
        const {name, lastName, age, direction, education, start} = this.state;
        const fullName = `${name} ${lastName}`;  
        onItemAdd(creator, typeOfItem, typeOfCurrentItem, fullName, direction, education, start, age);
        closePopup();
        clearCurrentItem('currentMember');
    }

    onBackToGrid = () => {
        const{closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentMember');
    }

    componentDidMount(){
        if (Object.keys(this.props.currentItem).length !== 0) {
            const { name,
                age, direction, 
                education, start } = this.props.currentItem;
            const arrayName = name.split(' ');
          
            this.setState({
                name: arrayName[0],
                lastName: arrayName[1],
                age,
                direction,
                education,
                start
            });
        }
    }


  render() {
   
    const {name, lastName, age, direction, education, start} = this.state;
    
    return (
        <form className='form form-members' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form__title'>Ivan Ivanov</h3>
            <fieldset className='form__fieldset'>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Name</label>
                    <input className='form__input'
                        type="text" 
                        required
                        name='name' 
                        placeholder='Name' 
                        value={name}
                        onChange={this.onChange}/>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Last Name</label>
                    <input className='form__input'
                        type="text" 
                        required
                        name='lastName' 
                        placeholder='Last Name' 
                        value={lastName}
                        onChange={this.onChange}/>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Age</label>
                    <input className='form__input'
                        type="number" 
                        required
                        name="age" 
                        min="10" 
                        max="100" 
                        placeholder='Age'
                        value={age}
                        onChange={this.onChange}/>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Direction</label>
                    <select className='form__input' name="direction" id="" value={direction} onChange={this.onChange} required>
                        <option value='Java'>JAVA</option>
                        <option value='C++'>C++</option>
                    </select>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="">Education</label>
                    <select  className='form__input' name="education" id="" value={education} onChange={this.onChange} required>
                        <option value='BSU'>BSU</option>
                        <option value='BSUIR'>BSUIR</option>
                    </select>
                </div>
                <div className='form__group'>
                    <label className='form__label' htmlFor="start">Date of start</label>
                    <input className='form__input' type="date" id="start" name="start" value={start} onChange={this.onChange} required></input>
                </div>
                <div className='form__btns'>
                    <button className='form__btn form__btn_color_save' type='submit'>Save</button>
                    <button className='form__btn form__btn_color_back' onClick={this.onBackToGrid}>Back to grid</button>
                </div>
            </fieldset>
        </form>
    )
  }
}