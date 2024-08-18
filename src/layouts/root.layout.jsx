import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function RootLayout() {
  const name = "Manupa";

  return (
    <main>
      <Navigation name={name} />
      <Outlet />
    </main>
  );
}

export default RootLayout;
