import React, { Component } from 'react';
import EncountersController from './EncountersController';
import './StatsController.css';

class StatsController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDifficulty: 3
    };
  }

  activeOrNot(difficulty) {
    if (difficulty === this.state.activeDifficulty)
      return "diff active-difficulty";
    else
      return "diff";
  }

  render() {
    var dataToDisplay;
    if (this.state.activeDifficulty === 3)
      dataToDisplay = this.props.data.normal;
    else if (this.state.activeDifficulty === 4)
      dataToDisplay = this.props.data.heroic;
    else
      dataToDisplay = this.props.data.mythic;

    return (
      <div className="container">
        <div className="row difficulty" style={{margin: '10px'}}>
          <div className="col-md-4">
            <div className={this.activeOrNot(3)} onClick={() => this.setState({activeDifficulty: 3})}><p className="nav-link">Normal</p></div>
          </div>
          <div className="col-md-4">
            <div className={this.activeOrNot(4)} onClick={() => this.setState({activeDifficulty: 4})}><p className="nav-link">Heroic</p></div>
          </div>
          <div className="col-md-4">
            <div className={this.activeOrNot(5)} onClick={() => this.setState({activeDifficulty: 5})}><p className="nav-link">Mythic</p></div>
          </div>
        </div>
        <div className="row">
          <EncountersController data={dataToDisplay} />
        </div>
      </div>
    );
  }
}

export default StatsController;
