import React, {useState, useEffect, useContext} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'

import axios from 'axios';

import CharactersContext from '../contexts/characters'; 
import * as Utils from '../utils/characterList';

const DropdownControl = () => {
  const {selectedCharacter, setSelectedCharacter} = useContext(CharactersContext);

  const [charactersList, setCharactersList] = useState([]);
  const [value, setValue] = useState('');
  const [spinnerVisible, setSpinnerVisible] = useState(true)

  
  useEffect(() => {
    new Promise((resolve, reject) => {
      Utils.getAllCharacters('http://swapi.dev/api/people', [], resolve, reject)
    })
      .then(response => {
        setCharactersList(response);
        setSpinnerVisible(false)
      })
  }, []);


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    href=""
    ref={ref}
    onClick={(e) => {
    e.preventDefault();
    onClick(e);
    }}
  >
      {children}
    { spinnerVisible && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> }
  </a>
  ));
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {

      return (
        <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
          <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
              (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
              )}
            </ul>
          </div>
          );
  },
  );

  const dropdownSelected = (idx, ev) => {
    setSelectedCharacter(charactersList[idx - 1]); 
  }


  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        { selectedCharacter === undefined ? 'Select Character' : selectedCharacter.name}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
         {charactersList.map(function(d, idx){
          return (<Dropdown.Item value={idx} key={idx} eventKey={idx + 1} onSelect={dropdownSelected}>{d.name}</Dropdown.Item>)
         })}
      </Dropdown.Menu>
    </Dropdown>

    )
}

export default DropdownControl;
