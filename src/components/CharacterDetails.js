import React, {useState, useEffect, useContext} from 'react'

import CharactersContext from '../contexts/characters'; 

import Table from 'react-bootstrap/Table';

const CharacterDetails = () => {

  const {selectedCharacter} = useContext(CharactersContext);

  const fields = [
    {
      display: 'Gender',
      id: 'gender'
    },
    {
      display: 'Birth year',
      id: 'birth_year'
    },
    {
      display: 'Height',
      id: 'height'
    },
    {
      display: 'Mass',
      id: 'mass'
    },
    {
      display: 'Hair Color',
      id: 'hair_color'
    }
  ]

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="2"><h1>{selectedCharacter.name === 'Select Character' ? '' : selectedCharacter.name}</h1></th>
        </tr>
      </thead>
      <tbody>
          {fields.map(field => {
            return (<tr key={field.id}><td><strong>{field.display}</strong></td><td>{selectedCharacter[field.id]}</td></tr>)
          })}
      </tbody>
    </Table>
  )
}

export default CharacterDetails;
