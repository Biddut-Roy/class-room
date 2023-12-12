import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebase.int";





export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleEntry = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const info = { 
        googleEntry,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>

    );
};

Authprovider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Authprovider;