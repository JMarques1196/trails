import { useState } from "react";
import Graph from "../Graph/graph";

const Menu = () => {
  const [metric, setMetric] = useState<string>("");

  return (
    <>
      {
        // Activity Selector
      }
      <p>Menu</p>
      <button onClick={() => setMetric("altitude")}>altitude</button>
      <button onClick={() => setMetric("heartRate")}>heart rate</button>
      <Graph name={metric} />
    </>
  );
};

export default Menu;
