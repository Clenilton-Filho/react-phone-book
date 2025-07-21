import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {

  render() {

    return (
      <div className='component-container'>
        <Header heading='Phone Directory' />
        <div className='component-body-container'>
          <Link to='/add'><button className='add-btn custom-btn'>Add</button></Link>

          <div className='grid-container heading-container'>
            <span className='name-heading grid-item'>Name</span>
            <span className='phone-heading grid-item'>Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span>
                <span className='grid-item'>{sub.phone}</span>
                <span className='grid-item action-btn-container'>
                  <button onClick={() => { this.props.deleteSubscriberHandler(sub.id)}} className='delete-btn custom-btn'>Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
    );
  }

}

export default ShowSubscribers;
