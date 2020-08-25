import React, { Component } from "react";
import axios from "axios";
import "./myStyles.css"

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectList: [],
      amount: 1,
      currencyFrom: "EURO",
      currencyTo: "GBP",
      convertedAmount: "" 
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/select-list")
      .then((response) => {
        this.setState({selectList: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleCurrencyFromChange = (event) => {
    console.log(event.target.value)
    this.setState({
      currencyFrom: event.target.value,
    });
  };

  handleCurrencyToChange = (event) => {
    this.setState({
      currencyTo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let ratio1 = 1;
    let ratio2 = 1;
    this.state.selectList.forEach(item => {
      if(item.Ccy == this.state.currencyFrom){
        ratio1 = item.Amt
      }
      if(item.Ccy == this.state.currencyTo){
        ratio2 = item.Amt
      }
    })
    let selector = ratio2 / ratio1;
    let results = this.state.amount * selector;
    this.setState({
      convertedAmount: results,
    });
    event.preventDefault();
  };
  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <div>
          <label className="label">Amount</label>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}>
            </input>
          <label className="label">Currency From</label>
            <select
              value={this.state.currencyFrom}
              onChange={this.handleCurrencyFromChange}>
              {this.state.selectList.map(item => (
                <option key={item.Ccy}>{item.Ccy}</option>
              ))}
            </select>
          <label className="label">Currency To</label>
            <select
              value={this.state.currencyTo}
              onChange={this.handleCurrencyToChange}>
              {this.state.selectList.map((x) => (
                <option key={x.Ccy}>{x.Ccy}</option>
              ))}
            </select>
        </div>
        <button type="submit">Convert</button>
        <div className="container">
          <div><label className="result">Result</label></div>
          <input type="number" value={this.state.convertedAmount} readOnly></input>
        </div>
      </form>
    );
  }
}

export default Converter;
