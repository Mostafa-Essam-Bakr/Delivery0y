import Form from 'react-bootstrap/Form';

function Restaurantsdrop() {
  return (

    <div className='chose'>
    <Form.Select aria-label="Default select example">
      <option>Restrants menu</option>
      <option value="1">Kfc</option>
      <option value="2">Mac</option>
      <option value="3">Big</option>
    </Form.Select>


<button> chose</button>
    </div>
  );
}

export default Restaurantsdrop;