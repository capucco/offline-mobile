export interface IPlace {
  name: string;
}

export type TPerson = {
  id: string;
  photo: string;
  name: string;
  description?: string;
};

export interface IEvent {
  id: string;
  title: string;
  description: string;
  place: IPlace;
  image: string;
  date: string;
  organizer: TPerson;
  invited?: TPerson[];
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description:
        'Good guy with high IQ and handsome and bla bla bla, and I love to eat alo of foood, lalal lala a',
    },
    invited: [
      {
        id: '2',
        photo:
          'https://media.wired.com/photos/5932769f44db296121d6b4c5/4:3/w_929,h_697,c_limit/MG_8139.jpg',
        name: 'Bill Brown',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: '3',
        photo: 'https://generated.photos/vue-static/home/feed/asian-girl.png',
        name: 'Mia Angel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: '4',
        photo:
          'https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg',
        name: 'Anna Frank',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ],
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
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
    organizer: {
      id: '1',
      photo:
        'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      name: 'Jack Dowson',
      description: 'Good guy with high IQ and handsome and bla bla bla',
    },
  },
];
