const user = {
    id: 1,
    name: "pragya kushwan",
    username: "jiya",
    email: "pragya123@gmail.com",
    phone: "1236549877",
    website: "pragyakushwahwww.com",
};
for (let key in user) {
    //   console.log(`${key}:${user[key as keyof typeof user]}`);
    console.log(`${key}:${user[key]}`);
}
export {};
