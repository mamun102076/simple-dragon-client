import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase';

export const AuthContext = createContext()

export const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return() => {
            unsubscribe()
        }
    },[])

    const authInfo = {user, providerLogin, logOut, createUser, signIn, loading, updateUser, verifyEmail}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;