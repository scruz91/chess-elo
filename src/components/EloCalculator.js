import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import './styles.css';

function calculateElo(win, loss) {
  var Elo = require('elo-rating');
  var won = parseInt(win);
  console.log(won);
  var lost = parseInt(loss);
  var result = Elo.calculate(won, lost, true, 40);

  console.log(result.playerRating); // Output: 1735
  console.log(result.opponentRating); // Output: 1550

  this.j1Elo = result.playerRating;

  this.j2Elo = result.opponentRating;

  console.log(this.j1Elo); // Output: 1735
  console.log(this.j2Elo); // Output: 1550
}

class EloCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        j1Name: '',
        j1Elo: 1000,
        j2Name: '',
        j2Elo: 1000,
      },
      jobs: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      post: { ...prevState.post, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.calculateElo(this.state.j1Elo, this.state.j2Elo);
    this.setState((prevState) => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { j1Name: '', j1Elo: 0, j2Name: '', j2Elo: 0 },
    }));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <button className="btn btn-primary">Post it!</button>
        </nav>
        * This is the section i've been trying to put in a separate
        component... *
        <Form
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
        <div className="post-container">
          <ul>
            {this.state.jobs.map((job, index) => (
              <li key={index}>
                <ul className="post-tile">
                  <li className="post-tile-name">{job.j1Name}</li>
                  <li className="post-tile-level">{job.j1Elo}</li>
                  <li className="post-tile-description">
                    {job.j2Name}
                  </li>
                  <li className="post-tile-salary">£{job.j2Elo}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default EloCalculator;
