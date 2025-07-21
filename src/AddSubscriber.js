import React, { useState } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link, useNavigate } from 'react-router-dom';

const AddSubscriber = (props) => {

    const [subscriber, setSubscriber] = useState(
        {
            id: 0,
            name: '',
            phone: ''
        }
    );

    /*
    constructor()
    {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }*/

    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setSubscriber(prevSubscriber => ({
            ...prevSubscriber,
            [name]: value
        }));
        console.log(subscriber);
    };

    /*
    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value
        this.setState(state);
        console.log(this.state);
    }
    */

    const onFormSubmitted = (e) => {
        e.preventDefault();
        props.addSubscriberHandler(subscriber);
        setSubscriber({ 
            id: 0, 
            name: '', 
            phone: '' });
        navigate('/');
    };

    /*
    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0,name:'',phone:''})
        navigate
    }
    */

    const { name, phone } = subscriber;

    /*
    render(){
        
        const {name,phone} = this.state
    */
    return (
        <div>
            <Header heading='Add Subscriber' />
            <div className='component-body-container'>
                <Link to='/'> <button className='custom-btn'>Back</button></Link>
                <form className='subscriber-form' onSubmit={onFormSubmitted.bind(this)}>
                    <label htmlFor='name' className='label-control'>Name: </label><br />
                    <input onChange={inputChangeHandler} id='name' type='text' className='input-control' name='name' /><br />
                    <label htmlFor='phone' className='label-control'>Phone: </label><br />
                    <input onChange={inputChangeHandler} className='input-control' name='phone' /><br />
                    <div className='subscriber-info-container'>
                        <span className='subscriber-to-add-heading'>Subscriber to be added: </span><br />
                        <span className='subscriber-info'>Name: {name}</span><br />
                        <span className='subscriber-info'>Phone: {phone}</span>
                    </div>
                    <button className='custom-btn add-btn'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddSubscriber;
