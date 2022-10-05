import React, { useMemo, useState } from "react";
import Character from "../Character";
import Pagination from "../Pagination";
import "./index.css";

export default function Characters({ values = [] }) {
  const [offset, setOffset] = useState(6);
  const [page, setPage] = useState(17);

  const characters = useMemo(() => {
    if (offset == 1) setOffset(6);
    const result = values.slice(page * offset - offset, page * offset);
    if (result.length < offset) setOffset(1);
    return result;
  }, [page]);

  return (
    <>
      <section className="characters">
        {characters.map((character) => (
          <Character key={character.id} value={character} />
        ))}
      </section>

      <Pagination
        offset={offset}
        pagesPer={8}
        currentPage={page}
        onPageChange={(n) => {
          console.log(n);
          setPage(n);
        }}
        showNextButton={true}
        showPreviousButton={true}
      />
    </>
  );
}
