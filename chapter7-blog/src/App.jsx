import { useState, useEffect } from 'react'
import Header from './components/Header'
import PostItem from './components/PostItem'
import useFetchPosts from './hooks/useFetchPosts'
import useFetchUsers from './hooks/useFetchUsers'
import './App.css'


function App() {

  const { posts, isPostLoading, isPostError } = useFetchPosts();
  const { users, isUsersLoading, isUsersError} = useFetchUsers();

  if (isPostLoading || isUsersLoading) {
    return <div className='blogContainer'>
      <Header />
      <div>로딩중입니다...</div>
    </div>;
  }

  if (isPostError || isUsersError) {
    return <div className='blogContainer'>
      <Header />
      <div>에러가 발생하였습니다...</div>
      <br />
      <div>새로고침을 해주세요...</div>
    </div>;
  }


  if (posts.length === 0 || users.length === 0) {
    return null;
  }

  return (
    <div className='blogContainer'>
      <Header />

      {posts.map(({ id, title, body, userId }) => {
        const user = users.find((user) => user.id === userId);

        return (
          <PostItem
            key={id}
            title={title}
            body={body}
            username={user.username}
            email={user.email} />
        )
      })};

    </div>
  )
}

export default App
