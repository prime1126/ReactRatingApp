
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    //initialize the states for likes and dislikes assuming this is the parent comp.
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => 
      {
        this.setState((prevState) => ({likes: prevState.likes +1, totalRatings: prevState.totalRatings+1}));
      },
      handleDislike: () => 
      {
        this.setState((prevState) => ({dislikes: prevState.dislikes +1, totalRatings: prevState.totalRatings+1}));
      }
    };
  }

  render() {
    return (
      //assuming the div content-rating is the main div
     <>
     <div className='content-rating'>
      <p>Dogs are mans best friend</p>
      <div className='rating-buttons'>
        <button name='like-button' onClick={this.state.handleLike}>Like({this.state.likes})</button>
        <button name='dislike-button'onClick={this.state.handleDislike}>Dislike({this.state.dislikes})</button>
        <p>Total number of Likes+Dislikes({this.state.totalRatings})</p>
      </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
