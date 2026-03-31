import { useState } from "react";
import PanelList from "./components/panel-list";
import "./App.css";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container">
      <h1>Image Gallery</h1>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={isExpanded}
          onChange={(e) => setIsExpanded(e.target.checked)}
        />
        Expand Images
      </label>

      <PanelList isExpanded={isExpanded} />
    </div>
  );
}
