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

  return (
    <div>{char.name}</div>
  )
}

export default CharacterDetails;
