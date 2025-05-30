import { useState, useEffect } from "react";
import "./activity.css";
import Graph from "../Graph/graph";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "src/firebase.js";
import { seedDatabase } from "src/helper/seed";

interface contentType {
  heartRate?: [];
  altitude?: [];
  id?: string;
}

const Menu = () => {
  seedDatabase(db);
  const [metric, setMetric] = useState<string>("");
  const [content, setContent] = useState<Array<contentType>>();
  const [filteredContent, setFilteredContent] = useState<contentType>({});

  // Grab data from Firebase - Default as a Run Activity when page is loaded.
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

  // get the correct collection according to the user selection
  const selectActivity = async (activity: string) => {
    await getDocs(collection(db, activity)).then((querySnapshot) => {
      const newData: Array<contentType> = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setContent(newData);
      setFilteredContent(newData[0]); // Display the first activity when first loading the app. To be removed
    });
  };

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
      <menu className="activity-menu">
        <h1>Menu</h1>
        <div className="buttons-container">
          <button onClick={() => selectActivity("run")}>Run</button>
          <button onClick={() => selectActivity("mountain-biking")}>
            Mountain Biking
          </button>
        </div>
        <div>
          <label className="date" htmlFor="dates">
            Choose a date:
          </label>
          <select name="dates" id="dates">
            {dateId.map((date) => (
              <option value={date} id={date} key={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </menu>
      <section className="graph">
        <h1>Metrics</h1>
        <div className="selection">
          <button onClick={() => setMetric("altitude")}>altitude</button>
          <button onClick={() => setMetric("heartRate")}>heart rate</button>
        </div>
        <Graph name={metric} data={filteredContent} />
      </section>
    </>
  );
};

export default Menu;
