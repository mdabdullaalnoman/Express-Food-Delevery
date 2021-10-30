import React, { createContext } from 'react';
import firebaseInit from '../firebase/firebaseinit';
import useFirebase from '../Hooks/useFirebase';
firebaseInit();
export const firebaseProvider = createContext();

const ContextProvider = ({ children }) => {
    console.log(children);
    const allFirebaseFunction = useFirebase();
    console.log(allFirebaseFunction);
    return (
        <firebaseProvider.Provider value={allFirebaseFunction}>
            {children}
        </firebaseProvider.Provider>
    );
};

export default ContextProvider;