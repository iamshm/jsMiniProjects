class EasyHTTP {
  // get req
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }
  // post
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }
  // put req
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }
  // delete
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });

    const resData = "Resorce Deleted";
    return resData;
  }
}
