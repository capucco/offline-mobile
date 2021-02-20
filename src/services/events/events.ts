export interface IPlace {
  name: string;
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  place: IPlace;
  image: string;
  date: string;
}

// TODO: use request instead of mock data
export const MOCK_EVENTS_DATA: IEvent[] = [
  {
    id: '1',
    title: 'Pool party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/1418519/pexels-photo-1418519.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '07/07/2021 01:00:00',
  },
  {
    id: '2',
    title: 'Camping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/1418519/errorrrr.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '08/07/2021 01:00:00',
  },
  {
    id: '3',
    title: 'Dinner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '',
  },
  {
    id: '4',
    title: 'Workout',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '',
  },
  {
    id: '5',
    title: 'Workout',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '',
  },
  {
    id: '6',
    title: 'Workoutttttttttttt  dfs fds sdf sdf st t tt tt t tt t',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    place: {
      name: 'Florida, Miami, Florida, Miami, Florida, Miami, Florida, Miami',
    },
    date: '',
  },
  {
    id: '7',
    title: 'Workout',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    place: {
      name: 'Florida, Miami',
    },
    date: '',
  },
];
