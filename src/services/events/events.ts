export interface IEvent {
  id: string;
  title: string;
  image: string;
}

// TODO: use request instead of mock data
export const MOCK_EVENTS_DATA: IEvent[] = [
  {
    id: '1',
    title: 'Pool party',
    image: 'https://images.pexels.com/photos/1418519/pexels-photo-1418519.jpeg',
  },
  {
    id: '2',
    title: 'Camping',
    image: 'https://images.pexels.com/photos/1418519/errorrrr.jpeg',
  },
  {
    id: '3',
    title: 'Dinner',
    image: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg',
  },
  {
    id: '4',
    title: 'Workout',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
  },
];
