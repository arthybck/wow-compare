import React, { Component } from 'react';
import "../Style/Footer.css";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      footer: "false"
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("footer") != null)
      this.setState({footer: sessionStorage.getItem("footer")});
    else
      this.setState({footer: "false"});
  }

  clear() {
    sessionStorage.setItem("footer", "true");
    this.setState({footer: "true"})
  }

  display() {
    if (this.state.footer === "true") {
      return (null)
    }
    else
      return (<footer className="fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <p>Welcome on Wow Compare. This website is still under development and is developped by <b>'François Guergadic'</b> (Azerane).</p>
              <p>The webapp is using React.js and you can follow development on <a href="https://github.com/Azerane/wow-compare">GitHub</a></p>
            </div>
            <div className="col-md-2 button-container">
              <button type="button" className="btn btn-primary" onClick={() => this.clear()}>Got it!</button>
            </div>
          </div>
        </div>
      </footer>);
  }

  render() {
    const display = this.display();

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Footer;
