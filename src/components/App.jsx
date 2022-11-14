import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import Heart from 'react-heart';
import { Container } from 'react-bootstrap';
import MainPage from './MainPage';
import Header from './Header';
import Registration from './Registration';
import Authorization from './Authorization';

export default function App({ user }) {
  const [currUser, setCurrUser] = useState(user || {});
  const [currFilms, setFilms] = useState([]);
  const [oneFilm, setOneFilm] = useState({});
  const [tre, setTre] = useState({});

  const [page, setPage] = useState(1);

  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  useEffect(() => {
    // console.log(page);
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'e9c59dfb-6ae3-49ff-87b7-b455b7ca9bcf',
        'Content-Type': 'application/json',
      },
      // value: TOP_100_POPULAR_FILMS,
    })
      .then((res) => res.json())
      .then((json) => setFilms(json.films))
      .catch((err) => console.log(err));
  }, [page]);

  const DetalsHandler = (id) => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'e9c59dfb-6ae3-49ff-87b7-b455b7ca9bcf',
        'Content-Type': 'application/json',
      },
      // value: TOP_100_POPULAR_FILMS,
    })
      .then((res) => res.json())
      .then((json) => setOneFilm(json))
      .catch((err) => console.log(err));
  };
  const SearchHandler = (film) => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${film}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'e9c59dfb-6ae3-49ff-87b7-b455b7ca9bcf',
        'Content-Type': 'application/json',
      },
      // value: TOP_100_POPULAR_FILMS,
    })
      .then((res) => res.json())
      .then((json) => setFilms(json.films))
      .catch((err) => console.log(err));
  };
  const TreHandler = (id) => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'e9c59dfb-6ae3-49ff-87b7-b455b7ca9bcf',
        'Content-Type': 'application/json',
      },
      // value: TOP_100_POPULAR_FILMS,
    })
      .then((res) => console.log('-----------', res))
      // .then((json) => console.log('-----------', json))
      .catch((err) => console.log(err));
  };

  // console.log(currFilms);
  // useEffect(() => {
  //   fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=spider', {
  //     method: 'GET',
  //     headers: {
  //       'X-API-KEY': 'e9c59dfb-6ae3-49ff-87b7-b455b7ca9bcf',
  //       'Content-Type': 'application/json',
  //     },
  //     // value: TOP_100_POPULAR_FILMS,
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Container className="bodyCont">
      <Header
        currUser={currUser}
        logOutHandler={logOutHandler}
        // topFilms={topFilms}
        currFilms={currFilms}
        setFilms={setFilms}
        SearchHandler={SearchHandler}
      />
      <Routes>
        <Route
          path="/"
          element={(
            <MainPage
              currUser={currUser}
              currFilms={currFilms}
              setFilms={setFilms}
              setPage={setPage}
              page={page}
              // topFilms={topFilms}
              oneFilm={oneFilm}
              DetalsHandler={DetalsHandler}
              TreHandler={TreHandler}
            />
)}
        />
        <Route path="/registration" element={<Registration setCurrUser={setCurrUser} />} />
        <Route path="/authorization" element={<Authorization setCurrUser={setCurrUser} />} />
      </Routes>

    </Container>
  );
}
