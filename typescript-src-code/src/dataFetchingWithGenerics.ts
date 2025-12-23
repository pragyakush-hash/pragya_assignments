interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function dataFetch<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const data: T[] = await res.json();
  return data;
}

const url = "https://jsonplaceholder.typicode.com/todos";

dataFetch<Todo>(url).then((data) => {
  const title = data.map((todo) => todo.title);
  console.log("for todo",title);
});

const url2 = "https://jsonplaceholder.typicode.com/posts";

dataFetch<Post>(url2).then((data) => {
  const body = data.map((post) => post.body);
  console.log("for post",body);
});
