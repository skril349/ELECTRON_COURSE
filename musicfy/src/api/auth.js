import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

export class Auth{
    async register(email, password){
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            
        }
    }
}