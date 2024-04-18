import { collection, addDoc } from "firebase/firestore";
import {
  HeartRateBpm,
  AltitudeMeters,
  /*
  MaximumHeartRateBpm,
  AverageHeartRateBpm,
  Position,
   TotalTimeSeconds,
  Time,
  DistanceMeters,
  Calories,
  MaximumSpeed,
  */
} from "garmin-tcx-parser/src/index";

const hr = [];
const alt = [];

for (let i = 0; i < HeartRateBpm.length; i++) {
  hr.push({ value: HeartRateBpm[i] });
}
for (let i = 0; i < AltitudeMeters.length; i++) {
  alt.push({ value: AltitudeMeters[i] });
}

export function seedDatabase(db) {
  addDoc(collection(db, "run"), {
    heartRate: hr,
    altitude: alt,
    //  maximumHeartRateBpm: MaximumHeartRateBpm,
    //  averageHeartRateBpm: AverageHeartRateBpm,
    // position: Position,
  });
}
