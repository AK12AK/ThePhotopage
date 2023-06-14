import React, { useState, useEffect } from "react";
import FooterLoginPage from "./Footer";
import HeaderLoginPage from "./Header";
import './LoginPage.css'   
import { useNavigate } from "react-router-dom"; 
import logo_Photopage from "../../../images/generatedtext.png";

function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState(".")
    const [forgetPassword, setForgetPassword] = useState(false)
    const [changePassword , setChangePassword] = useState(false)
    const [newPassword , setNewPassword] = useState("")
    const navigate = useNavigate();



    const handleSaveLoginDetails = () => {

        var Checkemail = JSON.parse(localStorage.getItem('user'))
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ((!email || regex.test(email) === false)) {
            setEmail("")
            setPassword("")
            alert(`Enter a "valid mail-id"`)
        }
        else {
            if (Checkemail == null) {
                if (password == confirmPassword) {
                    if (password.length > 8) {
                        if (password.match(/[A-Z]/)) {
                            if (password.match(/[a-z]/)) {
                                if (password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
                                    var credentials = { email: email, password: password }
                                    var user = JSON.parse(localStorage.getItem('user') || '[]')
                                    user.push(credentials)
                                    localStorage.setItem('user', JSON.stringify(user))
                                    setIsSignIn(false)
                                    setEmail("")
                                    setPassword("")
                                }
                                else alert("Password should contain atleast one SpecialCharacter")
                            }
                            else alert("Password should contain atleast one Lowercase")
                        }
                        else alert("Password should contain atleast one Uppercase")
                    }
                    else alert("Password should contain minimum of 9 characters")
                }
                else alert("Password doesn't match")
            }
            else {
                if (Checkemail.find((data) => data.email === email)) {
                    alert("This mail id is already registered")
                    setEmail("")
                    setPassword("")
                }
                else {
                    if (password == confirmPassword) {
                        if (password.length > 8) {
                            if (password.match(/[A-Z]/)) {
                                if (password.match(/[a-z]/)) {
                                    if (password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
                                        var credentials = { email: email, password: password }
                                        var user = JSON.parse(localStorage.getItem('user') || '[]')
                                        user.push(credentials)
                                        localStorage.setItem('user', JSON.stringify(user))
                                        setIsSignIn(false)
                                        setEmail("")
                                        setPassword("")
                                    }
                                    else alert("Password should contain atleast one SpecialCharacter")
                                }
                                else alert("Password should contain atleast one Lowercase")
                            }
                            else alert("Password should contain atleast one Uppercase")
                        }
                        else alert("Password should contain minimum of 9 characters")
                    }
                    else alert("Password doesn't match")
                }
            }
        }
    }

    const handleLogin = () => {
        debugger
        let verification = JSON.parse(localStorage.getItem('user'))
        let temp=0
        if(verification){
        verification.find((obj) => {
            if (obj.email == email) {
                temp++
                if (obj.password == password) {
                    
                    return(
                        navigate('/ThePhotoPage/Home'))
                }
                else {
                    alert("WRONG PASSWORD")
                    setForgetPassword(true)
                }
            }
        })
        if(!temp){
            alert("No such email id exists")
        }
    }
        else{
            alert("Create account by signing in")
        }
        setEmail("")
        setPassword("")
       
    }

    const handleForgetPassword = () =>{
        setChangePassword(true)
    }

    const handleChangePassword = () =>{
        let verification = JSON.parse(localStorage.getItem('user'))
        verification.map((obj) => {
            if (obj.email == email) {
                if (newPassword.length > 8) {
                    if (newPassword.match(/[A-Z]/)) {
                        if (newPassword.match(/[a-z]/)) {
                            if (newPassword.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
                                obj.password = newPassword
                            }
                            else alert("Password should contain atleast one SpecialCharacter")
                        }
                        else alert("Password should contain atleast one Lowercase")
                    }
                    else alert("Password should contain atleast one Uppercase")
                }
                else alert("Password should contain minimum of 9 characters")
            }
        })
        localStorage.setItem('user', JSON.stringify(verification))
        setChangePassword(false)
        setForgetPassword(false)
        setEmail("")
        setPassword("")

    }
    return <div className="login_page">
        <header style={{ color: 'red' }}>
            <HeaderLoginPage />
        </header>
        <main className="main">
            <article className="main_section_left">
                <section className="main_section_left_content">
                    <p style={{ color: '#e4e4e4' }}>Elegance</p>
                    <p className="Description">You can look at a picture for a week and never thing of it again.You can also look at a picure for a second and think of it all your life</p>
                    
                </section>
                {
                    (!isSignIn)
                        ?
                        <section className="main_section_right">
                            <input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} value={email}></input>
                            {(changePassword) &&<input placeholder="New Password" type="password" onChange={e => setNewPassword(e.target.value)} value={newPassword}></input>}
                            {(!changePassword) &&<input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} value={password}></input>}
                            <div className="main_section_footer">
                                <button onClick={handleLogin}>Login</button>
                                {
                                    (!changePassword) ?
                                    <div>
                                        {
                                    forgetPassword ? <button onClick={handleForgetPassword}>ChangePassword?</button> : ""
                                        }
                                    </div>
                                    :
                                    <div>
                                    {
                                forgetPassword ? <button onClick={handleChangePassword}>Confirm</button> : ""
                                    }
                                </div>
                                }
                                <button onClick={() => setIsSignIn(true)}>Sign up</button>
                            </div>
                        </section>
                        : <div className="main_right">
                            <section className="main_section_right">
                                <input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} value={email}></input>
                                <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} value={password}></input>
                                <input placeholder="ConfirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} ></input>
                                {
                                    (confirmPassword == password) ? "success" : ""
                                }
                                <div className="main_section_footer" >
                                    <button onClick={handleSaveLoginDetails}>submit</button>
                                    <button onClick={e => setIsSignIn(false)}>Back</button>
                                </div>
                            </section>
                        </div>
                }
            </article>
        </main>
        <footer>
            <FooterLoginPage />
        </footer>
    </div>
}

export default LoginPage