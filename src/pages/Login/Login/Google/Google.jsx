import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../../firebase/firebase.config';

const Google = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();


    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    return (
        <div>
            <Button onClick={handleGoogle} className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google </Button>
        </div>
    );
};

export default (Google);