import { Route } from "wouter";
import Home from "./components/Home";
import ModeButton from "./components/ModeButton";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";

function App() {
  return (
    <>
      <Home>
        <Route path="/" component={CountriesList} />
        <Route path="/:country" component={Country} />
      </Home>
    </>
  );
}

export default App;
