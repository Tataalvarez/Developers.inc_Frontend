// import useAuth from "../hooks/useAuth"

export function getUsername(email) {
  return email.substring(0, email.lastIndexOf("@"))
}

