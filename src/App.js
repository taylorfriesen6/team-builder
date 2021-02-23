import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

import Person from './Person.js';

// function App() {
//   const [team, setTeam] = useState([]);

//   const testUser = {name: 'Taylor', email: 'taylorfriesen@protonmail.com', role: 'student'};
//   setTeam([...team, testUser]);

//   return (
//     <div className="App">
//       <div className = "team">
//         {team.map(person => person.name)}
//       </div>
//     </div>
//   );
// }
  

function App() {
  const [team, setTeam] = useState([]);

  const testUser = {name: 'Taylor', email: 'taylorfriesen@protonmail.com', role: 'student'};
  
  useEffect(() => {
    setTeam([testUser, testUser]);
  }, []);

  return (
    <div className="App">
      {team.map((person,id) => <Person key={id} person={person}/>)}
    </div>
  );
}

export default App;
