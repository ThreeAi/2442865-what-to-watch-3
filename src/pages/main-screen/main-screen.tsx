import Logo from '../../components/logo/logo';
import FilmCard from './film-card';
import FilmsByGenre from '../../components/films-by-genre/film-by-genre';
import {Helmet} from 'react-helmet-async';
import {Film} from '../../types/film';

interface MainScreenProps {
  films: Film[];
}

function MainScreen({films}: MainScreenProps): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>WTW. Главная страница</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={films[0].src} alt={films[0].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <FilmCard {...films[0]}/>
        </div>
      </section>

      <div className="page-content">

        <FilmsByGenre films = {films}/>

        <footer className="page-footer">
          <Logo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainScreen;
