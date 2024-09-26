import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { useState } from "react";

function Navigation(props) {
  const { cart } = useContext(CartContext);
  const { user, isSignedIn, isLoaded } = useUser();

  console.log(user?.publicMetadata?.role);

  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <nav className="flex flex-col lg:hidden fixed left-0 right-0 top-0 bottom-0 bg-white z-20">
        <div className="flex items-center  py-8 px-4 xl:px-16 justify-end h-fit w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-4 justify-center px-4">
          <Link to="/" className="text-xl font-semibold">
            Home
          </Link>
          <Link to="/shop" className="text-xl font-semibold">
            Shop
          </Link>
          <div>
            <div>
              <Link to="/cart" className="flex items-center gap-x-4 relative">
                <p className="text-x">
                  {cart.reduce((sum, el) => {
                    return sum + el.count;
                  }, 0)}
                </p>
                <div className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  <span className="text-xl font-semibold">Cart</span>
                </div>
              </Link>
            </div>
          </div>
          <SignedIn>
            <div className="flex items-center gap-x-4">
              Hi, {user?.firstName}
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-x-4 text-xl font-semibold">
              <Link
                to="/sign-in"
                className="flex items-center gap-x-4 relative"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="flex items-center gap-x-4 relative"
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-between py-8 px-4 xl:px-16">
      <div className="flex items-center gap-x-16">
        <Link className="font-semibold text-3xl" to="/">
          Mebius
        </Link>
        <div className="hidden lg:flex items-center gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-x-8">
        <div>
          <Link to="/cart" className="flex items-center gap-x-4 relative">
            <p className="text-lg">
              {cart.reduce((sum, el) => {
                return sum + el.count;
              }, 0)}
            </p>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Cart
            </div>
          </Link>
        </div>
        <SignedIn>
          <div className="flex items-center gap-x-4">
            Hi, {user?.firstName}
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-x-4">
            <Link to="/sign-in" className="flex items-center gap-x-4 relative">
              Sign In
            </Link>
            <Link to="/sign-up" className="flex items-center gap-x-4 relative">
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
      <div className="flex lg:hidden">
        <svg
          onClick={() => setIsOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </nav>
  );
}

export default Navigation;

const props = {
  name: "Manupa",
};
