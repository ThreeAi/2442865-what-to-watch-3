import { Film } from "../../types/film";

export default function OverviewTab(film: Film): JSX.Element {

    return (
        <>
            <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">240 ratings</span>
                </p>
            </div>

            <div className="film-card__text">
                <p>{film.discription}</p>

                <p className="film-card__director"><strong>Director: {film.directors.name}</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
            </div>
        </>
    )
}