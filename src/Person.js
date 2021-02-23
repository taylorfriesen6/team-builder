import React from 'react';

function Person ({person}) {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>email: {person.email}</p>
      <p>role: {person.role}</p>
    </div>
  );
}

export default Person;