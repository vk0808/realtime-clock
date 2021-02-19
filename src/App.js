import "./styles.css";

export default function App() {
  const greet = "Hello ";
  return (
    <div className="App">
      <h1 className="greeting">{greet}</h1>
      <h2 className="time_cont">
        It is now
        <div className="time">{new Date().toLocaleTimeString()}</div>
      </h2>
    </div>
  );
}
