import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import BasicExample from './Droplist';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <FontAwesomeIcon icon={faBarsStaggered} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Main Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="lunch">
                        <li><BasicExample/></li>
                        <li><BasicExample/></li>
                        <li><BasicExample/></li>
                         <li><BasicExample/></li> 
                         <li><BasicExample/></li>
                      


                    </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;