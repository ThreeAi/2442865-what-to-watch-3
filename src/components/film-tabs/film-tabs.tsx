import { useState } from 'react';
import { Film } from '../../types/film';
import { TabsType, Tabs } from '../../const';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';
import DetailsTab from './details-tab';


function FilmTabs(film: Film): JSX.Element {

  const getTapByType = (type: TabsType, f: Film) => {
    switch (type) {
      case TabsType.Overview:
        return <OverviewTab {...f} />;
      case TabsType.Reviews:
        return <ReviewsTab {...f} />;
      case TabsType.Details:
        return <DetailsTab {...f} />;
    }
  };
  const f = film;
  const [tab, setTabType] = useState<TabsType>(TabsType.Overview);

  const tabChangeHandler = (type: TabsType) => {
    setTabType(type);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Tabs.map(({ type }) => (
            <li
              key={type}
              className={`film-nav__item ${type === tab ? 'film-nav__item--active' : ''}`}
              onClick={() => tabChangeHandler(type)}
              style={{ cursor: 'pointer' }}
            >
              <span className="film-nav__link">{type}</span>
            </li>
          )
          )}
        </ul>
      </nav>
      {getTapByType(tab, film)}
    </>
  );
}

export default FilmTabs;
