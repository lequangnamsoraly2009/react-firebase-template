import { firestoreDB } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';

const createCheckoutSession = async (price, currentUserId) => {
  const collectionRef = collection(
    firestoreDB,
    'customers',
    `${currentUserId}`,
    'checkout_sessions'
  );

  try {
    const docRef = await addDoc(collectionRef, {
      // "The `price` parameter should be the ID of a price object, rather than the literal numerical price. Please see https://stripe.com/docs/billing/prices-guide#create-prices for more information about how to set up price objects."
      price,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    const unsub = onSnapshot(docRef, (doc) => {
      const { url } = doc.data();
      if (url) {
        window.location.assign(url);
        unsub();
      };
    });

    // When you are no longer interested in listening to your data, you must detach your listener so that your event callbacks stop getting called.
  } catch (error) {
    console.error(error);
  };
};

export default createCheckoutSession;
