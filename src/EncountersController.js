import React, { Component } from 'react';
import EncounterDetailsController from './EncounterDetailsController'

class EncountersController extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    let encounters = [];
    this.props.data.forEach((encounter, i) => {
      encounters.push(<EncounterDetailsController key={i} data={encounter}/>)
    })

    return (
      <div className="EncountersController">
        {encounters}
      </div>
    );
  }
}

export default EncountersController;
