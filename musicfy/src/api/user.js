import { getAuth, updateProfile } from "firebase/auth";

export class User {
  getMe() {
    return getAuth().currentUser;
  }

  async updateAvatarUser(url) {
    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        photoURL: url,
      });
    } catch (error) {
      throw error;
    }
  }
}
