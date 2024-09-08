import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <main className="contianer px-4 flex items-center justify-center  min-h-screen">
      <SignIn />
    </main>
  );
}
