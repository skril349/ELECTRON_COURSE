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

  async updateDisplayName(displayName) {
    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        displayName,
      });
    } catch (error) {
      throw error;
    }
  }
}
