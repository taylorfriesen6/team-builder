import './App.css';

import React, { useState, useEffect } from 'react';

import Person from './Person.js';
import Form from './Form.js';

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

  
  
  // useEffect(() => {
  //   const testUser = {name: 'Taylor', email: 'taylorfriesen@protonmail.com', role: 'student'};
  //   setTeam([testUser, testUser]);
  // }, []);

  const addPerson = (person) => setTeam([...team, person])

  return (
    <div className="App">
      <Form addPerson={addPerson}/>
      <div className="team">
        {team.map((person,id) => <Person key={id} person={person}/>)}
      </div>
    </div>
  );
}

export default App;
