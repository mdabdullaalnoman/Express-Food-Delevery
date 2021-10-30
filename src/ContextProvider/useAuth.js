import { useContext } from "react"
import { firebaseProvider } from "./ContextProvider"

const useAuth = () => {
    return useContext(firebaseProvider);
}

export default useAuth;