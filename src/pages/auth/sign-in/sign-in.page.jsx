import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen lg:container px-4">
      <SignIn />
    </main>
  );
}

export default SignInPage;
