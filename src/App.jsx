import Hero from "./components/Hero"; //! ./ => Inside the same folder
import Navigation from "./components/Navigation";

function App() {

  const name = "Manupa";

  return (
    <main>
      <Navigation name={name} />
      <Hero />
    </main>
  );
}

export default App;
