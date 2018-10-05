import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Randõm',
      server: 'Hyjal'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <div className="col-md-8 col-md-offset-2 search">
          <h1>Inspect a player</h1>
          <div className="input-group">
            <input type="text" id="playername" className="form-control input-sm custom-input" placeholder="Player name" style={{height: '34px'}} name="name" value={this.state.name} onChange={this.handleChange}/>
            <span className="input-group-btn" style={{width: '0px'}}></span>
            <input type="text" id="playerrealm" className="form-control input-sm custom-input" placeholder="Player realm" style={{height: '34px', borderLeft: '0'}} name="server" value={this.state.server} onChange={this.handleChange}/>
            <span className="input-group-btn">
              <button className="btn custom-button" type="button" onClick={() => this.props.searchAction(this.state.name, this.state.server, "eu")}>Search!</button>
            </span>
          </div>
        </div>
      );
    }
}

export default Search;
