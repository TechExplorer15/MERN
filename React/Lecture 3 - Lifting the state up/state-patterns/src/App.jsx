import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion";
import Input from "./components/input";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Accordion title="Accordion Title" />;
      <Input value={value} onChange={setValue} />
      <Input value={value} onChange={setValue} />
    </>
  );
}

export default App;
