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
        <input type='text' name='name' value={person.name} onChange={updatePerson} />
        <input type='submit' value='Add Person' />
      </form>
    </div>
  );
}

export default Form;