import Header from '../Components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';

export default function HomeRoute() {
  return (
      <>
      <Header />
      <div style={{ padding: 50 }}></div>
      <Container>
        <Row>
          <Col>Explicació sobre ClassBits</Col>
          <Col>Imatge Chibi xula</Col>
        </Row>
        </Container>
        <Container>
          <Row>
            <Col>2 quadrats amb sobra gris (reutilitzar rtic)=> 1- Generador d'avatars 2-Joc</Col>
          </Row>
        </Container>
      </>
      );
  }