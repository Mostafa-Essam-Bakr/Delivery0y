import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";


function BasicExample1() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">

Pges  
    </Dropdown.Toggle>

      <Dropdown.Menu style={{position:"relative"}}>
        <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          

             <Link to="/Restrant" style={{listStyle:"none", color:"white", textDecoration:"none"}} >
                  Restrant
             </Link>

        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">Servese</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample1;


