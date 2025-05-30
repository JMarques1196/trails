import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import {
  HeartRateBpm,
  AltitudeMeters,
  Date,
  LatitudeDegrees,
  LongitudeDegrees,
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

// Note:
//When seeding temporarily change the url in vite.config.ts from /trails to /

const hr = [];
const alt = [];
const lat = [];
const long = [];
// HEART RATE
for (let i = 0; i < HeartRateBpm.length; i++) {
  hr.push({ value: HeartRateBpm[i] });
}
// ALTITUDE
for (let i = 0; i < AltitudeMeters.length; i++) {
  alt.push({ value: AltitudeMeters[i] });
}
// LATITUDE
for (let i = 0; i < LatitudeDegrees.length; i++) {
  lat.push({ value: LatitudeDegrees[i] });
}
// LATITUDE
for (let i = 0; i < LongitudeDegrees.length; i++) {
  long.push({ value: LongitudeDegrees[i] });
}
export function seedDatabase(db) {
  setDoc(doc(db, "mountain-biking", Date), {
    heartRate: hr,
    altitude: alt,
    //  maximumHeartRateBpm: MaximumHeartRateBpm,
    //  averageHeartRateBpm: AverageHeartRateBpm,
    latitude: lat,
    longitude: long,
  });
}
