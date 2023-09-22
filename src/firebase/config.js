import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfrnQ1i9uAMJXxs0DOA_rRYtdudS_BEUM",
  authDomain: "miniblog-e14db.firebaseapp.com",
  projectId: "miniblog-e14db",
  storageBucket: "miniblog-e14db.appspot.com",
  messagingSenderId: "993787503358",
  appId: "1:993787503358:web:8133105460c1d39779fbaf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
