import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export default useAuthentication = () => {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    //cleanup
    //deal with memory leek
    const [cancelled, setCancelled] = useState(false)

    

}