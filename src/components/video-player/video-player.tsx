import { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
    muted: boolean;
    poster: string;
    src?: string;
}

function VideoPlayer({ muted, poster, src }: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.load();
  }, [isPlaying, isLoaded]);

  return (
    <div className="small-film-card__image"
      onMouseOver={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <video
        src={src ? src : 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'}
        poster={poster}
        muted={muted}
        ref={videoRef}
        width={280}
      />
    </div>
  );
}

export default VideoPlayer;
