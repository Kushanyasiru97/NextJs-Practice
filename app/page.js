"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {

  const router = useRouter()

  return (
    <selection>
      <h1>useRouter</h1>
      <button className='border px-2 py-4'>Go to About Page</button>
    </selection>
  )
}
