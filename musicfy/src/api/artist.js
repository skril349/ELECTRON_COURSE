import { setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../utils";

export class Artist {
  collectionName = "artist";

  async create(image, name) {
    try {
      const idArtist = uuidv4();
      const created_at = new Date();
      const data = { id: idArtist, image, name, created_at };
      const docRef = doc(db, this.collectionName, idArtist);
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }
}
