import { collection, addDoc } from "firebase/firestore";
import {
  HeartRateBpm,
  MaximumHeartRateBpm,
  AverageHeartRateBpm,
  Position,
  /* TotalTimeSeconds,
  Time,
  DistanceMeters,
  AltitudeMeters,
  Calories,
  MaximumSpeed,
  */
} from "garmin-tcx-parser/src/index";

const data = [];

for (let i = 0; i < HeartRateBpm.length; i++) {
  data.push({ value: HeartRateBpm[i] });
}

export function seedDatabase(db) {
  console.log(data);
  addDoc(collection(db, "run"), {
    heartRate: data,
    //  maximumHeartRateBpm: MaximumHeartRateBpm,
    //  averageHeartRateBpm: AverageHeartRateBpm,
    // position: Position,
  });
}
