import { v4 as uuidv4 } from "uuid";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils";

export class Album {
  collectionName = "albums";

  async create(name, image, artist) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, image, artist, created_at };

      const docRef = doc(db, this.collectionName, id);

      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }
}
