import React, { useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

import './common/common.css';
import './AddEntry.css';

const AddEntry = (props) => {

    const [entry, setEntry] = useState(
        {
            id: 0,
            name: '',
            phone: ''
        }
    );

    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setEntry(prevEntry => ({
            ...prevEntry,
            [name]: value
        }));
        console.log(entry);
    };


    const onFormSubmitted = (e) => {
        e.preventDefault();
        props.addEntryHandler(entry);
        setEntry({ 
            id: 0, 
            name: '', 
            phone: '' });
        navigate('/');
    };

    const { name, phone } = entry;

    return (
        <div>
            <Header heading='Add Entry' />
            <Link to='/'> <button className='custom-btn back-btn'><span className='material-symbols-outlined'>undo</span></button></Link>
            <div className='component-body-container add-entry-component'>
                <form className='entry-form' onSubmit={onFormSubmitted.bind(this)}>
                    <label htmlFor='name' className='label-control'>Name: </label><br />
                    <input onChange={inputChangeHandler} id='name' type='text' className='input-control' name='name' /><br />
                    <label htmlFor='phone' className='label-control'>Phone: </label><br />
                    <input onChange={inputChangeHandler} className='input-control' name='phone' /><br />
                    <div className='entry-info-container'>
                        <span className='entry-to-add-heading'>Entry to be added: </span><br />
                        <span className='entry-info'>Name: {name}</span><br />
                        <span className='entry-info'>Phone: {phone}</span>
                    </div>
                    <button className='custom-btn add-btn material-symbols-outlined'>add</button>
                </form>
            </div>
        </div>
    )
}

export default AddEntry;
