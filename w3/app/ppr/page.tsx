import React from 'react';
import {Suspense} from 'react'
import {getPost} from "@/lib/getPost";

// Partial Pre-Rendering
// ssg (정적) + ssr (동적) 섞은 느낌
// 하나의 페이지를 정적과 동적 영역으로 분리하여 동시에 처리하는 랜더링 방식

// 동적 영역
async function Post() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      cache: "no-store", // SSR로
      // no store: 저장하지 말고 매번 새로 가져오라는 뜻
    }
  );


  const post = await res.json();

  return (
    <>
      <h1>이곳은 동적 영역입니다.</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export default async function PPR() {
  const staticPost = await getPost("ppr");
  return (
    <div>
      <h1>PPR 페이지입니다.</h1>
      <h2>정적 영역 (use cache)</h2>
      <p>{staticPost.title}</p>
      <p>{staticPost.body}</p>

      <Suspense fallback={<p>동적 영역 로딩중입니다 ...</p>}>
        <Post />
      </Suspense>
    </div>
  );
}
