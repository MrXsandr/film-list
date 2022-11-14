import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

function MyModal(args) {
  const {
    modal, toggle, oneFilm, TreHandler,
  } = args.modalState;
  // console.log(oneFilm);
  return (

    <Modal isOpen={modal} toggle={toggle} {...args}>
      <ModalHeader toggle={toggle}>{oneFilm.nameRu}</ModalHeader>
      <ModalBody>
        <img style={{ width: '60%' }} src={`${oneFilm.posterUrl}`} alt="img" />
        <div>
          {' '}
          Рейтинг:
          {' '}
          {oneFilm.ratingKinopoisk}
        </div>
        <div>
          {' '}
          Год:
          {' '}
          {oneFilm.year}
        </div>
        <div>
          {' '}
          {' '}
          {' '}
          <h6>Краткое описание:</h6>
          {' '}
          {oneFilm.shortDescription}
        </div>
        <a href={oneFilm.webUrl}>Ссылка на оригинал</a>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Закрыть
        </Button>
        {/* <Button onClick={() => {
          toggle();
          console.log(oneFilm.filmId);
          TreHandler(oneFilm.filmId);
        }}
        >
          Трейлер
        </Button> */}
      </ModalFooter>
    </Modal>

  );
}

export default MyModal;
