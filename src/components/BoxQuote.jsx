import React from "react";
import PropTypes from "prop-types";
import { quotes } from "../others/quotes";

class BoxQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      number: 0,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState({ number: Math.floor(Math.random(1) * 5) });
  }

  render() {
    return (
      <div className="container-fluid box">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <h1>Quote :</h1>
            <div>
              <div>
                <h2>
                  <i>"{this.state.quotes[this.state.number].quote}"</i>
                </h2>
                <p>
                  <b>{this.state.quotes[this.state.number].author}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-md-12">
            <button className="btn btn-success btn-lg" onClick={this.changeQuote}>
              change quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

BoxQuote.propTypes = {
  changeQuote: PropTypes.number,
};

BoxQuote.defaultProps = {
  changeQuote: 0,
};

export default BoxQuote;
