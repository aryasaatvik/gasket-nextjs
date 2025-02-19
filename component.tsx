'use client';

export function Component() {
  return (
    <h1>
      env: {process.env.NEXT_PUBLIC_MESSAGE}
    </h1>
  )
}