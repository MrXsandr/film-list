import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function Page({ setPage, page }) {
  const active = page;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={() => setPage(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />

    </div>
  );
}
