import React from "react";
import SettignsForm from "./SettignsForm";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { auth } = useAuth()
  const getUsername = (email) => {
    return email.substring(0, email.lastIndexOf("@"))
  }
  const username = getUsername(auth.email)
  return (
    <div className="flex justify-between bg-blue-300 border-b-5 text-black p-6">
      <div className="capitalize">{username}</div>
      <div>Buscador</div>
      <div>
        <SettignsForm />
      </div>
    </div>
  );
}
