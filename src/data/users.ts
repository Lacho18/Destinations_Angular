import User from './userInterface';

let users: User[] = [
  {
    id: 0,
    username: 'Ivan',
    password: '1234',
    gender: 'male',
    email: 'ivan@abv.bg',
    dateOfCreation: new Date(),
  },
  {
    id: 1,
    username: 'Asen',
    password: '4321',
    gender: 'male',
    email: 'Asen@yahoo.com',
    dateOfCreation: new Date(),
  },
  {
    id: 2,
    username: 'Anq',
    password: '1a2n3q',
    gender: 'female',
    email: 'an1@gmail.com',
    dateOfCreation: new Date(),
  },
];

export default users;
