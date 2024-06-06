import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <>
      <Header links={["portfolio", "hire me"]} />
      <Introduction />
    </>
  );
}

export default App;
