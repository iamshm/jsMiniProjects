const http = new easyHttp();
const url = "https://jsonplaceholder.typicode.com/posts";
//  comment out each section indivdually to see response
// console.log("This is GET");
// http.get(url, function (err, posts) {
//   if (!err) {
//     console.log(posts);
//   } else {
//     console.log(err);
//   }
// });

const data = {
  title: "Custom Post",
  body: "this is my post",
};
// console.log("This is POST");
// http.post(url, data, function (err, post) {
//   if (!err) {
//     console.log(post);
//   } else {
//     console.log(err);
//   }
// });
// console.log("This is PUT");
// http.put(`${url}/3`, data, function (err, post) {
//   if (!err) {
//     console.log(post);
//   } else {
//     console.log(err);
//   }
// });

// console.log("This is DELETE");
// http.delete(`${url}/1`, function (err, msg) {
//   if (!err) {
//     console.log(msg);
//   } else {
//     console.log(err);
//   }
// });
