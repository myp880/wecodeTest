import React from 'react';
import "../Login/login.css"
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const goTomain = () => {
        if ( Response.message === "valid user" ) {
            navigate("/main");
        } else {
            alert("가입된 회원이 아닙니다.");
            navigate("/signup");
        }
    }


    return (
    <div className="loginWrap">
        <div className="loginArea">
            {/* <h1 className="logo"><a href="">instagram</a></h1> */}
            <h1 className="logo"><Link to='/signup'>westagram</Link></h1>
            <div className="inputDataArea">
                <div className="loginFormBox"><input className="userId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/></div>
                <div className="loginFormBox"><input className="userPw" type="password" placeholder="비밀번호"/></div>
                <button className="btnLogin" disabled="disabled" onClick={goTomain} >로그인</button>
            </div>

            <a href="" className="forgotPw">비밀번호를 잊으셨나요?</a>
        </div>
    </div>
    );
};

export default Login;