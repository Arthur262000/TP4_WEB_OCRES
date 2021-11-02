import './App.css';
import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profils : [
        {
          prenom: "Bob",
          nom: "Smith",
          date: 1992
        },
        {
          prenom: "Martine",
          nom: "Neil",
          date: 1982
        },
        {
          prenom: "Camille",
          nom: "Dacosta",
          date: 1995
        }
      ]
      
    };


    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = () =>{
    this.setState({
      profils : [
        {
          prenom: "Thierry",
          nom: "Smith",
          date: 1992
        },
        {
          prenom: "Martine",
          nom: "Neil",
          date: 1982
        },
        {
          prenom: "Camille",
          nom: "Dacosta",
          date: 1995
        }
      ]
    });
  }


  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>Bob</button>
        <button className="btn btn-primary" onClick>Martine</button>
        <button className="btn btn-primary" onClick>Camille</button>
        {this.state.profils[0].prenom}
        </div>
    );
  }
}



export default Profile;
