import React from 'react';
import {getPost} from "@/lib/getPost";

// Static Side Generation
// 빌드 시점에 HTML을 미리 생성해 두고, 요청이 들어오면 그대로 반환하는 형식
export default async function SSG() {
  const post = await getPost("ssg");

  return (
    <div>
      <h1>SSG 페이지입니다.</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <form action="/api/revalidate-post" method="post">
        <button type="submit">revalidateTag("post")</button> { /* post 태그 달린 캐시를 버리고 다시 새로 가져오라는 뜻 */}
      </form>
    </div>
  );
}
