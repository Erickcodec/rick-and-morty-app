import React, { useState } from "react";
import LocationInfo from "../LocationInfo";
import SearchLocation from "../SearchLocation";
import useCharacters from "../../hooks/useCharacters";
import Characters from "../Characters";
import { Loading } from "../Loading";
import "./index.css";
import { Empty } from "../Empty";

function Section() {
  const [selectedLocation, setSelectedLocation] = useState();
  const { characters, loading } = useCharacters(selectedLocation);

  return (
    <section className="main">
      <div className="container">
        <header>
          <div className="Search">
            <SearchLocation onSelect={setSelectedLocation} />
          </div>
        </header>
        <section>
          {selectedLocation ? <LocationInfo value={selectedLocation} /> : null}

          {loading ? (
            <div className="loading__wrapper">
              <Loading />
            </div>
          ) : characters.length ? (
            <Characters values={characters} />
          ) : (
            <Empty />
          )}
        </section>
      </div>
    </section>
  );
}

export default Section;
