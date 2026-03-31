export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        gap: "20px",
      }}
    >
      <h1>CSR vs SSR 비교</h1>

      <a
        href="/csr"
        style={{
          padding: "12px 24px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          textDecoration: "none",
          color: "black",
        }}
      >
        CSR 페이지 보기
      </a>

      <a
        href="/ssr"
        style={{
          padding: "12px 24px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          textDecoration: "none",
          color: "black",
        }}
      >
        SSR 페이지 보기
      </a>
    </div>
  );
}