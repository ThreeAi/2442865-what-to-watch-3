import {Link} from 'react-router-dom';
import VideoPlayer from './video-player/video-player';

type SmallFilmCardProps = {
    id: number;
    name: string;
    photo: string;
}

function SmallFilmCard({id, name, photo}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <VideoPlayer muted poster={photo}></VideoPlayer>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
