import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      titulo: "Primeira página com Class Component",
      contador: 0
    }

    this.mudar = this.mudar.bind(this);
    this.aumentar = this.aumentar.bind(this);
  }

  mudar(){
    var novoTitulo = "Aprendi a utilizar Class Component";

    this.setState({titulo: novoTitulo});
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state)
  }

  render(){
    return (
      <div>
        <h1> {this.state.titulo} </h1>
        <button onClick={this.mudar}>Mudar Título</button>
        <h1></h1>
        <h1></h1>
        <button onClick={this.aumentar}>+</button>
        {this.state.contador}
        
      </div>
    )
  }

}

export default App;

