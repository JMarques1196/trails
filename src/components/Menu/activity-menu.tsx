import { useState, useEffect } from "react";
import Graph from "../Graph/graph";
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/firebase.js";

interface contentType {
  heartRate?: [];
  altitude?: [];
  id?: string;
}

const Menu = () => {
  const [metric, setMetric] = useState<string>("");
  const [content, setContent] = useState<Array<contentType>>();
  const [filteredContent, setFilteredContent] = useState<contentType>({});

  // Grab data from Firebase
  useEffect(() => {
    const firestoreData = async () => {
      await getDocs(collection(db, "run")).then((querySnapshot) => {
        const newData: Array<contentType> = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setContent(newData);
        setFilteredContent(newData[0]); // Display the first activity when first loading the app. To be removed
      });
    };
    firestoreData();
  }, []);

  let dateId: string[] = [];
  // get Date ids for the dropdown
  if (content) {
    for (let i = 0; i < content.length; i++) {
      dateId.push(content[i].id!);
    }
  }

  // event listener for the dropdown
  let e = document.getElementById("dates");
  e?.addEventListener("change", (event) => {
    let id = (event.target as HTMLInputElement).value;
    setFilteredContent(content?.find((activity) => activity.id === id)!);
    // console.log(filtered);
  });

  return (
    <>
      {
        // Activity Selector
      }
      <p>Menu</p>
      <label htmlFor="dates">Choose a date</label>
      <select name="dates" id="dates">
        {dateId.map((date) => (
          <option value={date} id={date} key={date}>
            {date}
          </option>
        ))}
      </select>
      <button onClick={() => setMetric("altitude")}>altitude</button>
      <button onClick={() => setMetric("heartRate")}>heart rate</button>
      <Graph name={metric} data={filteredContent} />
    </>
  );
};

export default Menu;
