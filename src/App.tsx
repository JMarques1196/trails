import React from "react";
import Layout from "./pages/layout";

import { HeartRateBpm } from "garmin-tcx-parser";

function App() {
  return (
    <>
      <Layout />
      {console.log({ HeartRateBpm })}
    </>
  );
}

export default App;
