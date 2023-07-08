import { useState } from "react";
import "./MoodChecker.css";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jauciates?");

  const handleMessage1 = () => {
    setMessage("- Nieko tokio, viskas bus gerai");
  };

  const handleMessage2 = () => {
    setMessage("- Gerai, nujauciau, kad greitu metu jausites puikiai");
  };

  const handleMessage3 = () => {
    setMessage("- Smagu girdeti, taip ir toliau");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button className="button" onClick={handleMessage1}>
        Jauciuosi prastai
      </button>
      <button className="button" onClick={handleMessage2}>
        Jauciuosi normaliai
      </button>
      <button className="button" onClick={handleMessage3}>
        Jauciusi puikiai
      </button>
    </div>
  );
};

export default MoodChecker;