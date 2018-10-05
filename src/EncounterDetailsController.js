import React, { Component } from 'react';
import "./EncounterDetailsController.css";

class EncounterDetailsController extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

getColor(amount) {
  var color = "#9d9d9d";
  if (amount > 25)
    color = "#1eff00";
  if (amount > 50)
    color = "#0070dd";
  if (amount > 75)
    color = "#a335ee";
  if (amount > 95)
    color = "#ff8000";
  return color;
}

whattorender(stat) {
  if (stat === 0)
    return (<div>
      <p className="centered-first" style={{color: "#E0143C"}}><b>No Data</b></p>
      <p className="centered-second" style={{color: "#101010"}}>x</p>
      <p className="left" style={{color: "#101010"}}>x</p>
      <p className="right" style={{color: "#101010"}}>x</p>
    </div>)
  else
    return (<div>
      <p className="centered-first" style={{color: this.getColor(this.props.data.maxPercentile)}}><b>{this.props.data.maxPercentile}%</b></p>
      <p className="centered-second">{this.props.data.maxTotal} dps</p>
      <p className="left" style={{color: this.getColor(this.props.data.averagePercentile)}}><b>~{this.props.data.averagePercentile}%</b></p>
      <p className="right">~{this.props.data.averageTotal} dps</p>
    </div>)
      }

getBackground() {
  const backgroundImageUrl = {
    2144: "./media/taloc.png",
    2141: "./media/dame.png",
    2128: "./media/fetid.png",
    2136: "./media/zekvoz.png",
    2134: "./media/vectis.png",
    2145: "./media/zul.png",
    2135: "./media/mythrax.png",
    2122: "./media/ghuun.png"
  }

  const background = 'url("' + backgroundImageUrl[this.props.data.encouterID] + '")';
  return background;
}

getOpacity() {
  if (this.props.data.maxTotal === 0) {
    return 0.3;
  }
  else
    return 1;
}

      render() {

        return (
          <div className="col-md-4" style={{opacity: this.getOpacity()}}>
            <div className="encounter" style={{backgroundImage: this.getBackground()}}>
              <div>
                <h3>{this.props.data.encouterName}</h3>
                {this.whattorender(this.props.data.maxTotal)}
              </div>
            </div>
          </div>
    );
  }
}

export default EncounterDetailsController;
