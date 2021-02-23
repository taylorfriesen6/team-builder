import React, {useState} from 'react';

function Form ({addPerson}) {
  const initialPerson = {
    name: '',
    email: '',
    role: '',
  };
  const [person, setPerson] = useState(initialPerson);

  const updatePerson = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addPerson(person);
    setPerson(initialPerson);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>Name: <input type='text' name='name' value={person.name} onChange={updatePerson} /></p>
        <p>Email: <input type='text' name='email' value={person.email} onChange={updatePerson} /></p>
        <p>Role: <input type='text' name='role' value={person.role} onChange={updatePerson} /></p>
        <input type='submit' value='Add Person' />
      </form>
    </div>
  );
}

export default Form;