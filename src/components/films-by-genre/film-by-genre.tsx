import { useState } from 'react';
import { Genres } from '../../const';
import { Film } from '../../types/film';
import ListFilms from '../list-films/list-films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/action';

type FilmsByGenreProp = {
    films: Film[];
}

function FilmsByGenre({ films }: FilmsByGenreProp): JSX.Element {

  const [filtredFilms, setFilter] = useState<Film[]>(films);
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const GenresArray: Genres[] = [
    Genres.AllGenres,
    Genres.Comedies,
    Genres.Crime,
    Genres.Documentary,
    Genres.Dramas,
    Genres.Horror,
    Genres.KidsFamily,
    Genres.Romance,
    Genres.SciFi,
    Genres.Thrillers
  ];

  const genreChangeHandler = (type: Genres) => {
    dispatch(setGenre(type));
    switch (type) {
      case Genres.Dramas:
        setFilter(films.filter((f) => f.genre === 'драмма'));
        break;
      case Genres.AllGenres:
        setFilter(films);
        break;
      default:
        setFilter([]);
    }
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {GenresArray.map((g) => (
          <li key={g}
            className={`catalog__genres-item ${g === selectedGenre ? 'catalog__genres-item--active' : ''}`}
            onClick={() => genreChangeHandler(g)}
          >
            <a href="#" className="catalog__genres-link">{g}</a>
          </li>
        ))}
      </ul>

      <ListFilms films={filtredFilms} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>

    </section>
  );
}

export default FilmsByGenre;
