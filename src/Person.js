import React from 'react';

function Person ({person}) {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>email: {person.email}</p>
            <p>role: {person.role}</p>
        </div>
    );
}

export default Person;