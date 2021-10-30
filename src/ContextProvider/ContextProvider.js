import React, { createContext } from 'react';
import firebaseInit from '../firebase/firebaseinit';
import useFirebase from '../Hooks/useFirebase';
firebaseInit();
export const firebaseProvider = createContext();

const ContextProvider = ({ children }) => {
    const allFirebaseFunction = useFirebase();
    return (
        <firebaseProvider.Provider value={allFirebaseFunction}>
            {children}
        </firebaseProvider.Provider>
    );
};

export default ContextProvider;