import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase_config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


   

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }
    const forgetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

                setUser(currentUser);
                setLoading(false);
                console.log('User is the auth state changed', currentUser);
           
        });
        return () => unSubscribe(); // cleanup function to unsubscribe from the listener when the component unmounts
    },[]);

    const authInfo = {
        user, createUser, logOut, signIn, loading,signInWithGoogle, forgetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;