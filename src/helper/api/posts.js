export const getPostsApi = () => {
  const url = "http://localhost:8080/api/posts";
  return fetch(url).then(response => response.json());
};

export const removePostApi = (id) => {
  const url = `http://localhost:8080/api/posts/${id}`;
  return fetch(url, { method: "DELETE" }).then((response) => response.json());
}

export const savePostApi = (body) => {
  const url = "http://localhost:8080/api/posts";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};

export const editPostApi = (id, body) => {
  const url = `http://localhost:8080/api/posts/${id}`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
