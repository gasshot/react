import { useState, useEffect } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function useFetchPosts(){
  const [posts, setPosts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isPostError, setIsPostError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsPostLoading(true);
        const response = await fetch(POSTS_URL);
        const json = await response.json();
        setPosts(json)
        setIsPostLoading(false);
      } catch (err) {
        console.log(err);
        setIsPostError(true);
        setIsPostLoading(false);
      }
    }
    fetchPost();
  }, [])

    return {
        posts,
        isPostLoading,
        isPostError,
    };
}

export default useFetchPosts;