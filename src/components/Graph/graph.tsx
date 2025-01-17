import "./graph.css";
import { FC, useState, useEffect } from "react";
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

interface dataType {
  heartRate?: [];
  altitude?: [];
  id?: string;
}
interface props {
  name: string;
  data: dataType;
}
const Graph = ({ name, data }: props) => {
  //seedDatabase(db);
  let aux: [] | undefined = [];

  name === "altitude" && data
    ? (aux = data.altitude)
    : data
    ? (aux = data.heartRate)
    : null;

  return (
    <>
      {data && (
        <div className="heart-rate-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={aux}
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
              <XAxis dataKey="none" tick={false} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                name={name}
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default Graph;
