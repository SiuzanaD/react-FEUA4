import "./App.css";
import Hero from "./components/Hero";
import Button from "./components/Button/Button";
import MoodChecker from "./components/moodChecker/MoodChecker";

function App() {
  return (
    <>
      <div>
        <Hero title="Info Hero" subtitle="Info subtitle" />
      </div>
      <div className="mg-t-30 flex-box">
        <Button title="text" />
        <Button title="contained" variant="contained" />
        <Button title="outlined" variant="outlined" />
      </div>
      <hr />
      <div className="mg-t-30 flex-box">
        <MoodChecker />
      </div>
    </>
  );
}

export default App;
