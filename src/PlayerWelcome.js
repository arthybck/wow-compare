import React, { Component } from 'react';
import './PlayerWelcome.css';

class StatsController extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const classColor = {
      "Death Knight":	"#C41F3B",
      "Demon Hunter":	"#A330C9",
      "Druid": "#FF7D0A",
      "Hunter": "#ABD473",
      "Mage":	"#40C7EB",
      "Monk":	"#00FF96",
      "Paladin": "#F58CBA",
      "Priest":	"#FFFFFF",
      "Rogue": "#FFF569",
      "Shaman":	"#0070DE",
      "Warlock": "#8787ED",
      "Warrior": "#C79C6E"
    }

    return (
      <div className="container">
        <div className="row">
          <span className="player-name" style={{color: classColor[this.props.player.class]}}><b>{this.props.player.name}</b></span>
          <span className="player-spec"> {this.props.player.spec} {this.props.player.class}</span>

        </div>
      </div>
    );
  }
}

export default StatsController;
