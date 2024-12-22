import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AouthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AouthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      result => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({
            ...result.user,
            displayName: name,
            photoURL: photoURL,
          });
        });
      }
    );
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const aoutInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };
  return (
    <AouthContext.Provider value={aoutInfo}>{children}</AouthContext.Provider>
  );
};

export default AouthProvider;
