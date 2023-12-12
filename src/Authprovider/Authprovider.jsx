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


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleEntry = () => {
        return signInWithPopup(auth, provider)
    }
    const entryUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [axiosPublic])

    const info = {
        user,
        loading,
        logOut,
        createUser,
        googleEntry,
        entryUser,
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