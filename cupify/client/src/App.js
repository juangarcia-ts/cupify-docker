import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);  
    this.state = {
      teams: [],
      stadiums: [],
      showGroups: true
    }   
  }

  componentDidMount(){
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(json => this.setState({teams: json}))
      .catch(error => console.log(error))

    fetch('http://localhost:3000/estadios')
      .then(response => response.json())
      .then(json => this.setState({stadiums: json}))
      .catch(error => console.log(error))
  }

  randomizeGroups(){
    let array = this.state.teams;
    let randomizedArray = [[], [], [], []]
    let counter = 0;

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = 0; i < 8; i++) {
      randomizedArray[i] = array.slice(counter, counter+4);
      counter = counter + 4;
    }
    return this.renderGroups(randomizedArray)
  }

  renderGroups(randomizedArray){
    return randomizedArray.map((group, i) => {
      return (
        <div className="col s3" key={i}>
          <h4>Grupo {i+1}</h4>
          {this.renderParticipants(group)}
        </div>
      )
    });
  }

  renderParticipants(group){
    return group.map((participant, i) => {
      return (
        <p key={i}>{participant.name}</p>       
      )
    });
  }

  renderStadiums(){    
    return this.state.stadiums.map((stadium, i) => {
      return (
        <div key={i} className="col s4">
          <h5>{stadium.name}</h5>
          <p>{"Capacidade: " + stadium.capacity}</p>       
        </div>
      )
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>  
        {this.state.showGroups
        ? 
          (
          <div style={{margin: 30}}>
            <button className="waves-effect waves-light btn blue darken-3" onClick={() => this.setState({showGroups: false})}>Mostrar Estádios</button>
            <div className="row">
              {this.randomizeGroups()}   
            </div>     
            <button className="waves-effect waves-light btn blue darken-3" style={{marginTop: 20}} onClick={() => this.forceUpdate()}>Reordenar</button>            
          </div>
          )
        :
          (
          <div style={{margin: 30}}>
            <button className="waves-effect waves-light btn blue darken-3" onClick={() => this.setState({showGroups: true})}>Mostrar Grupos</button>
            <div className="row" style={{marginTop: 30}}>
              {this.renderStadiums()}        
            </div>        
          </div>
          )         
        }
      </div>
    );
  }
}

export default App;
