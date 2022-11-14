import React, { useEffect, useState } from 'react';

import { Button, Card, Modal } from 'react-bootstrap';
import MyModal from './MyModal';

export default function CardFilm({
  film, DetalsHandler, oneFilm, TreHandler,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //   console.log(film);
  return (
    <Card className="border-0 my-5" style={{ width: '18rem', marginBottom: '1rem', color: 'black' }}>
      <Card.Img className="poster" variant="top" src={`${film.posterUrlPreview}`} style={{ width: '18rem', marginBottom: '1rem' }} />
      <Card.Body>
        <Card.Title className="fw-bold">{film.nameRu}</Card.Title>
        <Card.Text>
          <div>
            {' '}
            Рейтинг:
            {' '}
            {film.rating}
          </div>
          <div>
            {' '}
            Год:
            {' '}
            {film.year}
          </div>
          <div>
            {' '}
          </div>
        </Card.Text>
        <Button onClick={() => {
          toggle();
          DetalsHandler(film.filmId);
        }}
        >
          Выбрать
        </Button>

        <MyModal modalState={{
          modal, setModal, toggle, oneFilm, TreHandler,
        }}
        />

      </Card.Body>
    </Card>
  );
}
