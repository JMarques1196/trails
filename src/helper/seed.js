import { collection, addDoc } from "firebase/firestore";

export function seedDatabase(db) {
  addDoc(collection(db, "test"), {
    id: 1,
    title: "test",
  });
}
