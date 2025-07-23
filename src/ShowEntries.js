import React, { Component } from 'react';
import Header from "./Header";
import './ShowEntries.css';
import { Link } from 'react-router-dom';

class ShowEntries extends Component {

  render() {

    return (
      <div className='component-container'>
        <Header heading='Phone Book' />
        <div className='component-body-container'>
          

          <div className='grid-container heading-container'>
            <span className='name-heading grid-item'>Name</span>
            <span className='phone-heading grid-item'>Phone</span>
          </div>

          {
            this.props.renderedContent
          }

          <Link to='/add'>
            <button className='to-add-btn custom-btn custom-btn material-symbols-outlined'>add</button>
          </Link>

        </div>
      </div>
    );
  }

}

export default ShowEntries;
