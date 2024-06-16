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
  Overview = "Overview",
  Details = "Details",
  Reviews = "Reviews",
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
]