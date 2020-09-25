import React, {useState, useEffect, useContext} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import CharactersContext from '../contexts/characters'; 

const DropdownControl = (props) => {
  const {selectedCharacter, setSelectedCharacter} = useContext(CharactersContext);

  const [value, setValue] = useState('');

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
    &#x25bc;
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
    setSelectedCharacter(props.characters[idx - 1]); 
  }


  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Select Character
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
         {props.characters.map(function(d, idx){
          return (<Dropdown.Item value={idx} key={idx} eventKey={idx + 1} onSelect={dropdownSelected}>{d.name}</Dropdown.Item>)
         })}
      </Dropdown.Menu>
    </Dropdown>

    )
}

export default DropdownControl;
