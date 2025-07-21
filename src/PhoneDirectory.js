import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: 'Neo',
                    phone: '888888888'
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        subscribersList.forEach(sub => {
            if (sub.id === subscriberId){
                subscribersList.splice(subscriberId -1,1)
            }
        });
        this.setState({ subscribersList: subscribersList });
    }

    render() {
        return (
            <Router>
                <div className='main-container'>
                    <Routes>
                        <Route path='/' element={<ShowSubscribers subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                        <Route path='/add' element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;