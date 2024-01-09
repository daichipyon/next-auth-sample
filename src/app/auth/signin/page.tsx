import { getProviders, signIn } from "next-auth/react";
import Button from "./button";

// eslint-disable-next-line @next/next/no-async-client-component
const SignIn = async () => {
  const providers = await getProvidersProps()
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div key={provider.id}>
              <Button provider={provider} />
            </div>
          );
        })}
    </>
  );
};

export default SignIn;


export const getProvidersProps = async () => {
  // ここで、認証の方法を取得しています
  // 今回は、GitHub による認証だけですが、複数の認証方法（Google・Twitterなど）を取得することが出来ます
  const providers = await getProviders();
  return providers
};