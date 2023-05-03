import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../../firebase/firebase.config';

const Github = () => {
const auth = getAuth(app);
const github = new GithubAuthProvider();

            
const handleGithub = ()=>{
    signInWithPopup(auth, github)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
    })
    .catch(error =>{
        console.log(error)
    })
}


    return (
        <div>
            <Button onClick={handleGithub} variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
        </div>
    );
};

export default Github;