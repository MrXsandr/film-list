import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CardFilm from './CardFilm';
import Page from './Page';

function MainPage({
  topFilms, currFilms, setFilms, currUser, page, setPage, DetalsHandler, oneFilm, TreHandler,
}) {
  return (
    <Container>
      <Row md={4}>

        {/* {console.log(currFilms)} */}
        {currFilms?.map((el) => (
          <Col xs={3}>
            <CardFilm
              film={el}
              DetalsHandler={DetalsHandler}
              oneFilm={oneFilm}
              TreHandler={TreHandler}
            />
          </Col>
        ))}

      </Row>
      <Page setPage={setPage} page={page} />
    </Container>
  );
}

export default MainPage;

// { currWorkersAcept?.map((workerEL) => (
//   <AcceptWorker
//     worker={workerEL}
//     key={workerEL.id}
//     currUser={currUser}
//     deleteWorkerHandler={deleteWorkerAcceptedHandler}
//     changeHandler={changeHandler}
//   />
// )); }
