export interface IPlace {
  name: string;
}

export interface IEvent {
  id: string;
  title: string;
  place: IPlace;
  image: string;
}

// TODO: use request instead of mock data
export const MOCK_EVENTS_DATA: IEvent[] = [
  {
    id: '1',
    title: 'Pool party',
    image: 'https://images.pexels.com/photos/1418519/pexels-photo-1418519.jpeg',
    place: {
      name: 'Florida, Miami',
    },
  },
  {
    id: '2',
    title: 'Camping',
    image: 'https://images.pexels.com/photos/1418519/errorrrr.jpeg',
    place: {
      name: 'Florida, Miami',
    },
  },
  {
    id: '3',
    title: 'Dinner',
    image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
    place: {
      name: 'Florida, Miami',
    },
  },
  {
    id: '4',
    title: 'Workout',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    place: {
      name: 'Florida, Miami',
    },
  },
];
