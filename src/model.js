const baseURL = "https://jsonplaceholder.typicode.com/";

export async function getUsers(id = -1) {
  if (id >= 0) {
    const user = await fetch(`${baseURL}users/${id}`);
    return user;
  } else {
    const users = await fetch(`${baseURL}users`);
    return users;
  }
}

function data() {
  return "I am your data";
}

export default data;
