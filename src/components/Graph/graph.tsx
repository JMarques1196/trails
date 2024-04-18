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

const Graph = () => {
  //seedDatabase(db);

  interface contentType {
    heartRate?: [];
    altitude?: [];
    id: string;
  }
  const [content, setContent] = useState<Array<contentType>>();

  // Grab data from Firebase
  useEffect(() => {
    const firestoreData = async () => {
      await getDocs(collection(db, "run")).then((querySnapshot) => {
        const newData: Array<contentType> = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(newData);
        setContent(newData);
      });
    };
    firestoreData();
  }, []);
  //
  return (
    <>
      {content && (
        <div className="heart-rate-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              height={400}
              data={content[0].altitude}
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
                name="Heart Rate"
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
