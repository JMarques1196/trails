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
      <></>
      <Graph />
    </>
  );
};

export default Menu;
