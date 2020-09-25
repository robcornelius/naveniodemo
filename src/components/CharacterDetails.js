import React, {useState, useEffect, useContext} from 'react'

import CharactersContext from '../contexts/characters'; 

import Table from 'react-bootstrap/Table';

const CharacterDetails = (props) => {

  const {selectedCharacter, setSelectedCharacter} = useContext(CharactersContext);
  const [char, setChar] = useState({})

  useEffect(() => {
    if (selectedCharacter !== null ) {
      console.log('selectedCharacter', selectedCharacter);
      setChar(selectedCharacter);
      console.log('char', char);
      //setChar(props.characters[selectedCharacter].name);
    } 
  }, [selectedCharacter]);

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
          <th colspan="2"><h1>{char.name}</h1></th>
        </tr>
      </thead>
      <tbody>
          {fields.map(field => {
            return (<tr key={field.id}><td><strong>{field.display}</strong></td><td>{char[field.id]}</td></tr>)
          })}
      </tbody>
    </Table>
  )
}

export default CharacterDetails;
