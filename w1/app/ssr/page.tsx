// csr과 달리 "use client" 없음

export default async function ssr() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")

  const post = await res.json()

  return (
    <div>
      <h1>ssr 페이지입니다.</h1>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
}

