import "./heartRateGraph.css";
import { HeartRateBpm, Time } from "garmin-tcx-parser/src/index";
import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Map: FC = () => {
  let data: Array<any> = [];
  for (let i = 0; i < Time.length; i++) {
    data.push({ value: HeartRateBpm[i] });
  }

  return (
    <div className="heart-rate-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" />
         add CartesianGrid Later when time worked on 
         add XAxis datakey 
         */}
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Map;
