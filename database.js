import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getItems = async () => {
  try {
    const itemsRef = db.collection('items');
    const snapshot = await itemsRef.get();
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getItems };
