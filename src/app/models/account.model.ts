export interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  profilePicture: string;
  userName: string;
}

export const UserList: IUser[] = [
  {
    firstName: 'Amir',
    lastName: 'Habibi',
    password: 'amir123456',
    profilePicture: 'https://generated.photos/face/neutral-white-adult-male-with-short-black-hair-and-brown-eyes--5e68893d6d3b380006f22fd9',
    userName: 'amir.h',
  },
  {
    firstName: 'Niku',
    lastName: 'Molina',
    password: 'anders5',
    profilePicture:'https://images.generated.photos/F3N3OT3PEQgszg8GLS1dfQf2vRkjoXCwff5cjs_l5Oc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMDY3NDEuanBn.jpg',
    userName: 'niku.m',
  },
  {
    firstName: 'Andres',
    lastName: 'Molina',
    password: 'niku5',
    profilePicture: 'https://generated.photos/face/neutral-asian-young-adult-male-with-short-black-hair-and-brown-eyes--5e6804e86d3b380006d48743',
    userName: 'andres.m',
  },
];

