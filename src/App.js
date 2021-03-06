import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import {CharactersContext} from './contexts/characters';

import DropdownControl from './components/dropdown';
import CharacterDetails from './components/CharacterDetails';

function App(props) {
  const context = {
    name: 'Select Character',
    gender: '',
    birth_year: '',
    height: '',
    mass: '',
    hair_color: ''
  }

  const [selectedCharacter, setSelectedCharacter] = useState(props.dummyContext || context);

  return (
    <CharactersContext.Provider value={{selectedCharacter, setSelectedCharacter}}>
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div className="selectedCharacterBox">
              <DropdownControl/>
            </div>
          </Col>
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
