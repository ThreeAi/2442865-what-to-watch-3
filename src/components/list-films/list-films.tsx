// import React, { useState } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card';


interface ListScreenProps {
    films: Film[];
}

function ListFilms({films}: ListScreenProps) : JSX.Element {
  // const [activeFilm, setActiveFilm] = useState<number | null>(null);
  return(
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard key={film.id} id={film.id} name = {film.name} photo={film.src}/>
      ))}
    </div>
  );
}

export default ListFilms;
