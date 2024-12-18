"use client";
import React from 'react'

export default function User({params}) {
    console.log(params)
  return (
    <div>
      <h1>Information About {params.user}</h1>
      <p>Hello I'm {params.user}</p>
    </div>
  )
}
