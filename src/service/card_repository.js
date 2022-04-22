import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { app } from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    const database = getDatabase();
    const syncRef = ref(database, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(syncRef);
  }
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}

export default CardRepository;
