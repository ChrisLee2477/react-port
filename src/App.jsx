import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import FooterButtons from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterButtons />
      </footer>
    </>
  );
}

export default App;
