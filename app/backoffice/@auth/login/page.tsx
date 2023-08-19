"use client";
import { useRouter } from "next/navigation";

export default async function Login() {
  const router = useRouter();
  return (
    <>
      <span onClick={() => router.back()}>Close modal</span>
      <h1>Login from auth from parallel routes</h1>
    </>
  );
}
