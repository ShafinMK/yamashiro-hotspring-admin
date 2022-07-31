import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeFirebase from "../Firebase/firebase.init";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInwithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setIsLoading(true);
                // setUser(result.user);
                // console.log(user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setIsLoading(false);
            })
            .finally(
                setIsLoading(false)
            )
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // setIsLoading(true);
                // console.log(user.email);
                setUser(user);
            }
            setIsLoading(false);
        });

    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            // setIsLoading(true);
            setUser({});
            console.log('signing out...');
            navigate('/login');
            // setIsLoading(false);
        }).catch((error) => {
            setError(error.message);
        });

    }

    return { user, error, isLoading, signInwithGoogle, logOut };
}

export default useFirebase;
