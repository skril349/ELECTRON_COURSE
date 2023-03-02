import {getAuth, createUserWithEmailAndPassword, signOut} from "firebase/auth"

export class Auth{
    async register(email, password){
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            const auth = getAuth();
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    }
}