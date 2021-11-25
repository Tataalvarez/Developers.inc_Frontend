import React from 'react'
import useAuth from '../hooks/useAuth'

export default function Home() {
  const auth = useAuth()
  console.log(auth);
  
  return (
    <div>
      <h2 className="text-xl text-gray-800">Estamos en el Home del usuario</h2>
    </div>
  )
}
