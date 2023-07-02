import Layout from "./components/Layout/Layout";
import "./globals.css";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Layout />
    </div>
  );
}

export default App;
