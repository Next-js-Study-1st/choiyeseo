"use client"
// Client Component 라는 뜻
// Next.js App Router에서는 기본이 Server Component이다. 즉 기본 상태는 서버에서 실행된다. 근데 React처럼 브라우저 기능(useState, useEffect 등)을 쓰려면 "use client"를 파일 맨 위에 써야 한다.

import {useEffect, useState} from "react";

export default function csr() {
  const [post, setPost] = useState<any>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data)=>setPost(data))
  }, []);

  if (!post) return <div>로딩중입니다.</div>
  return (
    <div>
      <h1>csr 페이지입니다</h1>.
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
}
