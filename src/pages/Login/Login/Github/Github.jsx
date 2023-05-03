import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Github = () => {
    return (
        <div>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with GitHub</Button>
        </div>
    );
};

export default Github;