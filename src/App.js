import React, { Component } from 'react';
import './App.css';
import StatsController from './StatsController';
import PlayerWelcome from './PlayerWelcome';
import Search from './Search';
const querystring = require('querystring');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      rawData: null
    };
  }

  getResumeForSpecificEncounter(encounterIdentity, difficulty, data) {
          let i = 0;
          var result = {
            encouterName: encounterIdentity.name,
            encouterID: encounterIdentity.id,
            averagePercentile: 0,
            averageTotal: 0,
            maxPercentile: 0,
            maxTotal: 0
          };
          data.forEach((encounter) => {
            if (encounter.encounterID === encounterIdentity.id && encounter.difficulty === difficulty) {
              result.averageTotal += encounter.total;
              result.averagePercentile += encounter.percentile;
              if (encounter.percentile > result.maxPercentile) {
                result.maxPercentile = encounter.percentile;
                result.maxTotal = encounter.total;
              }
              i++;
            }
          });
          if (i >= 1) {
            result.averageTotal = Math.round(result.averageTotal / i);
            result.averagePercentile = Math.round(result.averagePercentile / i);
          }
          return (result);
        }

  getAllDataForCurrentRaidByDifficulty(difficulty, data) {
    var result = [];
    const encounters = [
            {
                "id": 2144,
                "name": "Taloc",
                "npcID": 137119
            },
            {
                "id": 2141,
                "name": "MOTHER",
                "npcID": 135452
            },
            {
                "id": 2128,
                "name": "Fetid Devourer",
                "npcID": 133298
            },
            {
                "id": 2136,
                "name": "Zek'voz, Herald of N'zoth",
                "npcID": 134445
            },
            {
                "id": 2134,
                "name": "Vectis",
                "npcID": 134442
            },
            {
                "id": 2145,
                "name": "Zul, Reborn",
                "npcID": 138967
            },
            {
                "id": 2135,
                "name": "Mythrax the Unraveler",
                "npcID": 134546
            },
            {
                "id": 2122,
                "name": "G'huun",
                "npcID": 132998
            }
        ];
      encounters.forEach((encounter) => {
        result.push(this.getResumeForSpecificEncounter(encounter, difficulty, data));
      })
      return result;
  }

  getAllData(data) {
    const dataByDiff = {
      normal: this.getAllDataForCurrentRaidByDifficulty(3, data),
      heroic: this.getAllDataForCurrentRaidByDifficulty(4, data),
      mythic: this.getAllDataForCurrentRaidByDifficulty(5, data)
    }
    return dataByDiff;
  }

  fetchData(playername, realm, region) {
    const url = "https://www.warcraftlogs.com/v1/parses/character/" + playername + "/" + realm + "/" + region;
    const parameters = {
      api_key: 'cfefded20019450f0d52da21e65324a2',
      metric: 'dps'
    }
    const encoded = querystring.stringify(parameters);
    fetch(url + "?" + encoded, {
      method: "GET"
    }).then((res) => {
      return res.json();
    }).then((res) => {
      //console.log(this.getAllData(res));
      this.setState({data: this.getAllData(res), rawData: res});
      });

  }

  getSpecPlayed() {
    var specPlayed = [];
    var spec = null;
    var amount = 0;
    var classPlayed = this.state.rawData[0].class;
    var name = this.state.rawData[0].characterName;
    var server = this.state.rawData[0].server;
    this.state.rawData.forEach((encounter) => {
      specPlayed.push(encounter.spec);
    })
    var occurrences = { };
    for (var i = 0, j = specPlayed.length; i < j; i++) {
      occurrences[specPlayed[i]] = (occurrences[specPlayed[i]] || 0) + 1;
    }
    for (var key in occurrences) {
      if (occurrences[key] > amount) {
        amount = occurrences[key];
        spec = key;
      }
    }
    return {name: name, spec: spec, class: classPlayed, server: server} ;
  }


  render() {
    var _statsController = null;
    var _playerWelcome = null;
    if (this.state.data != null) {
      _statsController = <StatsController data={this.state.data}/>
      _playerWelcome = <PlayerWelcome player={this.getSpecPlayed()}/>
    }

    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Search searchAction={(name, server, region) => this.fetchData(name, server, region)}/>
        </div>
      </div>
      {_playerWelcome}
      {_statsController}

    </div>
  );
}
}

export default App;
