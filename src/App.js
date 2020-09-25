import React, {useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import {CharactersContext} from './contexts/characters';

import DropdownControl from './components/dropdown';
import CharacterDetails from './components/CharacterDetails';

function App() {

  const [charactersList, setCharactersList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const getAllPeople = (url, people, resolve, reject) => {
    axios.get(url)
    .then(response => {
      const returnedPeople = people.concat(response.data.results);
      if (response.data.next !== null) {
        getAllPeople(response.data.next, returnedPeople, resolve, reject)
      } else {
        resolve(returnedPeople);
      }
    })
    .catch(err => {
      console.error(err);
      reject('something went wrong')
    })
  }

  useEffect(() => {
    new Promise((resolve, reject) => {
      getAllPeople('http://swapi.dev/api/people', [], resolve, reject)
    })
      .then(response => {
        setCharactersList(response);
      })
  }, []);



  return (
    <CharactersContext.Provider value={{selectedCharacter, setSelectedCharacter}}>
    <div className="App">
      <Container>
        <Row>
          <Col><DropdownControl characters={charactersList}/></Col>
        </Row>
        <Row>
          <Col>
            <CharacterDetails/>
          </Col>
        </Row>
      </Container>
    </div>
    </CharactersContext.Provider>
  );
}

export default App;
