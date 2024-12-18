import { redirect } from 'next/navigation'
import React from 'react'

export default function ID({params}) {

    if(params.id == 4){
        redirect("/login")
    }
  return (
    <div>
      {params.id}
    </div>
  )
}
