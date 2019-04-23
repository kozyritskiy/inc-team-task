import React, { Component } from 'react'


export default class MemberDetailForm extends Component {
    maxId = 8000;
    state = {
        userId: ++this.maxId,
        name: '',
        lastName: '',
        direction: 'Java',
        education: 'BSU',
        start: '',
        sex: '',
        birthdate: '',
        address:'',
        mobile: '',
        skype: '',
        telegram: '',
        email: '',
        math: '',
        score: ''
    }
    
    onChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    getAge = (birth) => {
        const date = new Date();
        return date.getFullYear() - birth;
    }

    onSubmit = e => {
        e.preventDefault();
        const {onItemAdd,closePopup,creator,typeOfItem,typeOfCurrentItem,clearCurrentItem} = this.props;
        const {name, lastName, direction, education, start, birthdate, userId} = this.state;
        const yearOfBirth = birthdate.substring(0,4);
        const userAge = this.getAge(+yearOfBirth);
        const fullName = `${name} ${lastName}`;  

        onItemAdd(creator, typeOfItem, typeOfCurrentItem, userId, fullName, direction, education, start, userAge);
        closePopup();
        clearCurrentItem('currentMember');
    }

    onBackToGrid = () => {
        const{closePopup,clearCurrentItem} = this.props;
        closePopup();
        clearCurrentItem('currentMember');
    }

    // componentDidMount(){
    //     console.log(this.props.currentItem);
    //     if (Object.keys(this.props.currentItem).length !== 0) {
    //         const { name,
    //             direction, 
    //             education, start ,
    //             sex,address, mobile, email,score,math,skype,telegram} = this.props.currentItem;
    //         const arrayName = name.split(' ');
          
    //         this.setState({
    //             name: arrayName[0],
    //             lastName: arrayName[1],
    //             direction,
    //             education,
    //             start,
    //             sex,
    //             address,mobile,email,score,math,skype,telegram
    //         });
    //     }
    // }

    componentDidUpdate(prevProps) {
        // console.log(this.props.currentItem);
        if (this.props.currentItem !== prevProps.currentItem) {
            const { id,name,
                direction, lastName,
                education, start ,birthdate,
                sex,address, mobile, email,score,math,skype,telegram} = this.props.currentItem;
            
            this.setState({
                userId: id,
                name,
                lastName,
                direction,
                education,
                start,
                sex,
                birthdate,
                address,mobile,email,score,math,skype,telegram
            });
        }
      }


  render() {
    // console.log(this.state);
    // console.log(this.props.currentItem);
    const {name, lastName, 
            direction, 
            education, start, 
            sex, birthdate,
            address, mobile,
            email,score,
            math,skype,telegram} = this.state;
        
    const {openEdit, openRegister} = this.props;

    let formTitle;

    openEdit ? 
        formTitle = `${name} ${lastName}`:
            openRegister ? 
                formTitle = `Hi, fill the form please` : 
                    formTitle = null;
    
    return (
        <form className='form form-members' action="" method='' onSubmit={this.onSubmit}>
            <h3 className='form__title'>{formTitle}</h3>
            <div className='form__fieldsets'>
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
                        <label className='form__label' htmlFor="">Sex</label>
                        <select className='form__input' name="sex" id="" value={sex} onChange={this.onChange} required>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="start">Date of birth</label>
                        <input className='form__input' type="date" id="" name="birthdate" value={birthdate} onChange={this.onChange} required></input>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Address</label>
                        <input className='form__input'
                            type="text" 
                            required
                            name='address' 
                            placeholder='Address' 
                            value={address}
                            onChange={this.onChange}/>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Mobile phone</label>
                        <input className='form__input'
                            type="tel" 
                            required
                            name='mobile' 
                            placeholder='+375-(29)-432-23-12' 
                            value={mobile}
                            onChange={this.onChange}/>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Email</label>
                        <input className='form__input'
                            type="email" 
                            required
                            name='email' 
                            placeholder='email-name@globex.com' 
                            value={email}
                            onChange={this.onChange}/>
                    </div>
                </fieldset>
                <fieldset className='form__fieldset'>
                <div className='form__group'>
                        <label className='form__label' htmlFor="">Direction</label>
                        <select className='form__input' name="direction" id="" value={direction} onChange={this.onChange} required>
                            <option value='Java'>JAVA</option>
                            <option value='C++'>C++</option>
                            <option value='PHP'>PHP</option>
                            <option value='C#'>C#</option>
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
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">University Average Score</label>
                        <input className='form__input'
                            type="number" 
                            required
                            name='score' 
                            placeholder='Your score' 
                            value={score}
                            onChange={this.onChange}/>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Math Score</label>
                        <input className='form__input'
                            type="number" 
                            required
                            name='math' 
                            placeholder='Your score' 
                            value={math}
                            onChange={this.onChange}/>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Skype</label>
                        <input className='form__input'
                            type="text" 
                            required
                            name='skype' 
                            placeholder='Your username' 
                            value={skype}
                            onChange={this.onChange}/>
                    </div>
                    <div className='form__group'>
                        <label className='form__label' htmlFor="">Telegram</label>
                        <input className='form__input'
                            type="text" 
                            required
                            name='telegram' 
                            placeholder='Your username'
                            value={telegram}
                            onChange={this.onChange}/>
                    </div>
                </fieldset>
            </div>
            <div className='form__btns'>
                <button className='form__btn form__btn_color_save' type='submit'>Save</button>
                <button className='form__btn form__btn_color_back' onClick={this.onBackToGrid}>Back to grid</button>
            </div>
        </form>
    )
  }
}