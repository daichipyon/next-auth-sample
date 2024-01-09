
"use client"
import { getProviders, signIn } from "next-auth/react";

export default function Button({provider}: {provider: any}) {
  return (
    <button
      onClick={() => signIn(provider.id)}
      type="button"
    >
    <span className="text-2xl">Sign in with {provider.name}</span>
    </button>
  )
}