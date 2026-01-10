const URL = "https://jsonplaceholder.typicode.com/posts";
const INVALID_URL = "https://jsonplaceholder.typicode.com/posts-invalid";

async function fetchPost() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      // 예외처리 필요
      throw new Error("에러가 발생했습니다.");
    }
    const body = await response.json();

    console.log(body);
  } catch (err) {
    console.log(err);
  }
}

fetchPost();
