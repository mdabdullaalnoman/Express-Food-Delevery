import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // google sing in ------------------------------------------------------------
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    // on login user info stored ------------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // get and set id token in local storage--------------
            if (user) {
                getIdToken(user)
                    .then(function (idToken) {
                        localStorage.setItem('idToken' ,idToken);
                    })
                    .catch(function (error) {
                        console.log(error.message);
                    });
            }


            // setIsLoading(true)
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                setUser({})
            }
            setIsLoading(true)
        })
    }, [auth])

    // google sing out-----------------------------------------------
    const handleGoogleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })

            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setIsLoading,
        isLoading,
        handleGoogleSignIn,
        handleGoogleSignOut
    }

}

export default useFirebase;