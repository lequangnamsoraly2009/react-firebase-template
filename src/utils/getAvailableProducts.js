import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../firebase';

const getAvailableProducts = async () => {
  const q = query(collection(firestoreDB, 'products'), where('active', '==', true));

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  } catch (error) {
    console.error(error);
  };
};

export default getAvailableProducts;