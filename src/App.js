import {Container, Row, Col } from 'react-bootstrap'
import ExibeCep from './components/Exibecep';
// Importanto CSS do componente
import './components/Exibecep.css'

function App() {

  return (
    <div className="App">
      <>
        <Container>
            <Row>
              <Col>
              <div className='box-form'>
                <ExibeCep></ExibeCep>
              </div>
              </Col>
            </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
