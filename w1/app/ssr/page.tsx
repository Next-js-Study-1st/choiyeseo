// csr과 달리 "use client" 없음

export default async function ssr() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")

  const post = await res.json()

  return (
    <div style={{padding: "40px", fontFamily: "sans-serif"}}>
      <h1>SSR 페이지입니다.</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          maxWidth: "500px",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

