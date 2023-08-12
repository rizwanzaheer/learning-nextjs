"use client";

import { useState } from "react";
import Link from "next/link";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      to <Link href="/">home</Link>
    </div>
  );
}
