import React, { Component } from "react";
export default class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = { valor1: "", valor2: "" };
    this.conveter = this.conveter.bind(this);
  }

  conveter() {
    let de_para = this.props.moeda1 + "_" + this.props.moeda2;
    let url =
      "https://free.currconv.com/api/v7/convert?q=" +
      this.props.moeda1 +
      "_" +
      this.props.moeda2 +
      "&compact=ultra&apiKey=a0ab4e3ebccd1750c9f9";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(de_para);
        let cotacao = json[de_para];
        let moedaB_valor = (
          parseFloat(this.state.moedaA_valor) * cotacao
        ).toFixed(2);
        this.setState({ moedaB_valor });
        console.log(moedaB_valor);
      });
  }
  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moeda1} para {this.props.moeda2}
        </h2>
        <input
          type="text"
          onChange={(event) =>
            this.setState({ moedaA_valor: event.target.value })
          }
        ></input>
        <input type="button" value="conveter" onClick={this.conveter}></input>
        <h2>Valor Convertido: {this.state.moedaB_valor} </h2>
      </div>
    );
  }
}
