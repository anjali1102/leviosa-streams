import "./App.css";
import { Navbar, Sidebar } from "./component";
import { Homepage } from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
