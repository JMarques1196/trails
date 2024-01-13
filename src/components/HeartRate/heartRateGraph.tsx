import { HeartRateBpm, Time } from "garmin-tcx-parser/src/index";
import { FC } from "react";
import { LineChart, Line } from "recharts";

const Map: FC = () => {
  let data: Array<any> = [];
  for (let i = 0; i < Time.length; i++) {
    data.push({ value: HeartRateBpm[i] });
  }

  console.log(HeartRateBpm);
  return (
    <>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default Map;
