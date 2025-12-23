interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website?: string;
}

const user: User = {
  id: 1,
  name: "pragya kushwan",
  username: "jiya",
  email: "pragya123@gmail.com",
  phone: "1236549877",
  website: "pragyakushwahwww.com",
};

// type UserType = typeof user;
type UserKeys = keyof User;

for (let key in user) {
  //   console.log(`${key}:${user[key as keyof typeof user]}`);
  console.log(`${key}:${user[key as UserKeys]}`);
}
