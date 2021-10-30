import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    // google sing in ------------------------------------------------------------
    const handleGoogleSignIn = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // on login user info stored ------------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
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
        handleGoogleSignIn,
        handleGoogleSignOut
    }

}

export default useFirebase;