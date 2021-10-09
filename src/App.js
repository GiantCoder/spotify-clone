import "./App.css";
import Login from "./pages/Login";
import dotenv from "dotenv";
dotenv.config();

function App() {
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
