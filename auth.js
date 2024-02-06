import axios from "axios";

const API_KEY = "AIzaSyDuhtZl4f3lLnwfd3WZ5qgEnfl0yYt75uA";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log("====================================");
  console.log(response.data);
  console.log("====================================");
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
