import React from 'react';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();



    return (
        <div className = "signupWrap">
            <h1>Signup</h1>
            <button onClick={ ()=> {
                navigate("/main");
            } }>main으로 이동</button>
        </div>
    );
};

export default Signup;