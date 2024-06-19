export const Description = {
  name: 'Movie Name',
  genre: 'Action',
  year: 2022,
};

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const Tabs = [
  {
    type: TabsType.Overview,
  },
  {
    type: TabsType.Details,
  },
  {
    type: TabsType.Reviews,
  }
];

export enum Genres {
  AllGenres = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}
