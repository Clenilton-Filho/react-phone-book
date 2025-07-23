import React, { Component } from 'react';
import AddEntry from './AddEntry';
import ShowEntries from './ShowEntries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class PhoneBook extends Component {

    constructor() {
        super();
        this.state = {
            entryList: [
                {
                    id: 1,
                    name: 'Alberto Balsalm',
                    phone: '123456789'
                },
                {
                    id: 2,
                    name: 'Neo TX',
                    phone: '888888888'
                },
                {
                    id: 3,
                    name: 'John Marston',
                    phone: '999999999'
                }
                
            ]
        }
    }


    addEntryHandler = (newEntry) => {
        let entryList = this.state.entryList;
        if (entryList.length > 0) {
            newEntry.id = entryList.length + 1;
        }
        else {
            newEntry.id = 1;
        }
        entryList.push(newEntry);
        this.setState({ entryList: entryList });
    }

    deleteEntryHandler = (entryId) => {
        let entryList = this.state.entryList;
        let newEntryList = entryList.filter(entry => entry.id !== entryId);
        this.setState({ entryList: newEntryList });
    }

    render() {

        const { entryList } = this.state;

        const sortedEntries = entryList.sort((a, b) => a.name.localeCompare(b.name));
        let currentLetter = '';
        const groupedRenderedEntries = [];

        sortedEntries.forEach(entry => {
            const firstLetter = entry.name[0].toUpperCase();

            if (firstLetter !== currentLetter) {
                groupedRenderedEntries.push(
                    <h2 className="letter-heading">{firstLetter}</h2>
                );
                currentLetter = firstLetter;
            }

            groupedRenderedEntries.push(
                <div key={entry.id} className='grid-container'>
                    <span className='grid-item name-phone'>{entry.name}</span>
                    <span className='grid-item name-phone'>{entry.phone}</span>
                    <button className='grid-item delete-btn custom-btn material-symbols-outlined' onClick={() => { this.deleteEntryHandler(entry.id)}}>
                        <span className='material-symbols-outlined'>delete</span>
                    </button>
                </div>
            )}
        );

        return (
            <Router>
                <div className='main-container'>
                    <Routes>
                        <Route path='/' element={<ShowEntries renderedContent={groupedRenderedEntries} />} />
                        <Route path='/add' element={<AddEntry addEntryHandler={this.addEntryHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default PhoneBook;