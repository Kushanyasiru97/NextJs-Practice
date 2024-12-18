"use client";
import React from 'react'

export default function Project({params}) {
  return (
    <div>
      <h1>Project {params.all}</h1>
      <br />
      All Routes
      {params.all.map((p) =>(
        <li key={p}>{p}</li>
      ))}
    </div>
  )
}
