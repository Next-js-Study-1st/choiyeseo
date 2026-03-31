"use cache"; // 이 함수 결과 캐싱
import {cacheLife, cacheTag} from "next/cache"

export type CacheMode = "ssg" | "isr" | "ppr";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function getPost(mode: CacheMode): Promise<Post> {
  cacheTag('post')

  // 명시적 opt-in 캐싱
  if (mode === "isr") {
    cacheLife({revalidate: 10}) // 캐시를 얼마나 오래 두는지-> 10초 뒤에 업데이트
  } else {
    cacheLife("max")
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  })
  return res.json()
}