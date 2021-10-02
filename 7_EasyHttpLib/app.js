const http = new EasyHTTP();
const url = "https://jsonplaceholder.typicode.com/users";

// http
//   .get(url)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const data = {
  name: "John",
  username: "jdoe",
  email: "jd@jd.com",
};
// post
// http
//   .post(url, data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// put
// http
//   .put(`${url}/2`, data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// delete
http
  .delete(`${url}/2`)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
