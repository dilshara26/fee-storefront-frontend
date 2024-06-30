import Hero from "./components/Hero"; //! ./ => Inside the same folder
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  const name = "Manupa";

  return (
    <main>
      <Navigation name={name} />
      <Hero />
      <Products />
    </main>
  );
}

export default App;
