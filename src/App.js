
import React from 'react';
// import { Component } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

// ---- V Easy ------

// class App extends Component {
//   render(){
//     return(
//     <div className="App">
//       <ul>
//         <li> name: Chanthai Anthony Phakdy </li>
//         <li> age: 26</li>
//         <li> number: 7</li>
//       </ul>
//     </div>
//     )
//   }
// }

// ---- Easy ------

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {},
//     };
//   }


// ---- Medium ------

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//         firstName: 'Chanthai',
//         lastName: 'Phakdy',
//         favNumber: 10
//       }
//     }
//   } 
//   render(){
//       const { firstName, lastName, favNumber } = this.state.person;
//       return(
//         <div>
//           <BasicInfo person={{ firstName, lastName, favNumber}} />
//         </div>
//       )
//       }
//     }
// export default App;

// ---- Hard ------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          firstName: 'Chanthai',
          lastName: 'Phakdy',
          favNumber: 10
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          favNumber: 42
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          favNumber: 7
        }
      ]
    }
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        {people.map(person => (
          <BasicInfo key={`${person.firstName}-${person.lastName}`} person={person} />
        ))}
      </div>
    )
  }
}

export default App;
