export interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  profilePicture?: string;
  userName: string;
}

export const UserList: IUser[] = [
  {
    firstName: 'Amir',
    lastName: 'Habibi',
    password: 'amir123456',
    profilePicture: 'https://images.generated.photos/Xvzq5BmqHMJKwx_KnA0fqSWk4rokklEQQV5Ix0WBZ-k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNDU1NzAuanBn.jpg',
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
    profilePicture: 'https://images.generated.photos/UZRiwHvE4unj4XBSjKciH9lfzqYJYo25SYRpQkk7-zI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MjY2NTMuanBn.jpg',
    userName: 'andres.m',
  },
  {
    firstName: 'Hosein',
    lastName: 'Habibi',
    password: 'hosein12',
    userName: 'hosein.h',
  },
  {
    firstName: 'sedighe',
    lastName: 'alavi',
    password: 'sedighe123',
    profilePicture: '',
    userName: 'sedighe.a',
  },
];

