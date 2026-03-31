import React from 'react';
import {getPost} from "@/lib/getPost";

// Incremental Static Regeneration
// 정적으로 생성된 페이지를 일정 시간 후 자동으로 다시 생성하는 방식
// SSG + 자동 업데이트 느낌
export default async function ISR() {
  const post = await getPost("isr");

  return (
    <div>
      <h1>ISR 페이지입니다.
      </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
