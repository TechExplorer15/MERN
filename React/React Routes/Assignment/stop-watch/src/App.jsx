import { useState } from "react";
import "./App.css";
import StopWatch from "./components/stop-watch.jsx";
import Focus from "./components/focus.jsx";
import ImageSlider from "./components/image-slider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StopWatch />
      <Focus />
      <ImageSlider></ImageSlider>
    </>
  );
}

export default App;
