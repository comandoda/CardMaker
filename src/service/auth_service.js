import firebase from "firebase/compat/app";
import firebaseApp from "./firebase";
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebase.auth().signOut();
  }
  onAuthChange(ouUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      ouUserChanged(user);
    });
  }
}
export default AuthService;
