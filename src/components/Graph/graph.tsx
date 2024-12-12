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
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/firebase.js";
//import { seedDatabase } from "src/helper/seed";

interface contentType {
  heartRate?: [];
  altitude?: [];
  id: string;
}
const Graph = (prop: { name?: string }) => {
  //seedDatabase(db);

  let aux: [] | undefined = [];
  const [content, setContent] = useState<Array<contentType>>();

  // Grab data from Firebase
  useEffect(() => {
    const firestoreData = async () => {
      await getDocs(collection(db, "run")).then((querySnapshot) => {
        const newData: Array<contentType> = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setContent(newData);
      });
    };
    firestoreData();
  }, []);

  // Metric selection
  prop.name === "altitude" && content
    ? (aux = content[0].altitude)
    : content
    ? (aux = content[0].heartRate)
    : null;

  console.log(content);
  return (
    <>
      {content && (
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
                name={prop.name}
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
