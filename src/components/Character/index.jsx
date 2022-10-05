import React from "react";
import "./index.css";

function CardShip({ label, content }) {
  return (
    <div className="card-ship">
      <small className="card-ship__label">{label}</small>
      <p className="card-ship__content">{content}</p>
    </div>
  );
}

export default function Character({ value: character = {} }) {
  return (
    <article className="character card">
      <header className="card__header">
        <div className="character__badge">
          <span>{character.status}</span>
        </div>
        <img className="card__thumbnail" src={character.image} alt="" />
      </header>
      <section className="card__section">
        <h5 className="card__title">{character.name}</h5>

        <div className="card__content">
          <CardShip label="Race" content={character.species} />
          <CardShip label="Origin" content={character.origin.name} />
          <CardShip label="Episodes" content={character.episode.length} />
        </div>
      </section>
    </article>
  );
}
