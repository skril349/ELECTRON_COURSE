import { getAuth } from "firebase/auth";

export class User {
  getMe() {
    return getAuth().currentUser;
  }
}
