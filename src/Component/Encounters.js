import React, { Component } from 'react';
import EncounterDetails from './EncounterDetails'

class Encounters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    let encounters = [];
    this.props.data.forEach((encounter, i) => {
      encounters.push(<EncounterDetails key={i} data={encounter}/>)
    })

    return (
      <div className="EncountersController">
        {encounters}
      </div>
    );
  }
}

export default Encounters;
