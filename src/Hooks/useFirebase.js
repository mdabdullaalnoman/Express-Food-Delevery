import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // google sing in ------------------------------------------------------------
    const handleGoogleSignIn = () => {
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    // on login user info stored ------------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                setUser({})
            }
        });
    }, [auth])

    // google sing out-----------------------------------------------
    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        isLoading,
        handleGoogleSignIn,
        handleGoogleSignOut
    }

}

export default useFirebase;