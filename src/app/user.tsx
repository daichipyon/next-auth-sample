"use client"
import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>this is from client side</h1>
      <p>Client Session</p>
      <p>{session?.expires}</p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.image}</p>
    </>
  );
};
