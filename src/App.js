import logo from "./image.jpeg";
import "./App.css";
import Jumbo from "./jumboTitle";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="100%" />
      </header>
      <Jumbo title="Shubham Kumar" description="Research Scholar at NITK" />
    </div>
  );
}

export default App;
