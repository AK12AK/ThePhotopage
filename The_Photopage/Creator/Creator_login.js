import React, { useState } from "react";
import './Creator_login.css'
import logo_Photopage from "../../../images/generatedtext.png";
import Customer_background from '../../../images/wallpaperflare.com_wallpaper.jpg'
import {useNavigate} from 'react-router-dom'


function Creator_login() {

    const navigate = useNavigate();
    const [isNew, setIsNew] = useState(false)
    const [userName, setUserName] = useState("")
    const [passKey, setPassKey] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [aadharNumber , setAadharNumber] = useState('')
    const [studioName , setStudioName] = useState('')
    const [generateUserName , setGenerateUserName] = useState('')
    const [generatePassKey , setGeneratePassKey] = useState('')
    const [dateOfBirth , setDateOfBirth] = useState('')

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleSaveDetails = () =>{
        var validation = JSON.parse(localStorage.getItem("creators"))
        if(validation)
        validation.find((data) =>{
            if(data.generateUserName != userName)
            {
                if(data.generatePassKey.length == 6)
                {
                    if(data.aadharNumber.length == 12)
                    {
                        var creatorDetails = {firstName : firstName , lastName : lastName , phoneNumber : phoneNumber , aadharNumber : aadharNumber , studioName : studioName , generateUserName : generateUserName , generatePassKey : generatePassKey , dateOfBirth : dateOfBirth}
                        var creators = JSON.parse(localStorage.getItem('creators') || '[]')
                        creators.push(creatorDetails)
                        localStorage.setItem("creators", JSON.stringify(creators))
                        setIsNew(false)
                    }
                    else alert("Aadahr invalid")
                }else alert("Passkey should contain only 6 digits")
            }
        })
        if(!validation){
            alert("Create new user name and passkey")
        }
    }

    const handleLogin = () =>{
        var verification = JSON.parse(localStorage.getItem('creators'))
        if(verification){
            verification.find((data) => {
                if(data.generateUserName === userName)
                {
                    if(data.generatePassKey === passKey)
                    {
                        navigate('/ThePhotopage/Home/Creator')
                    }
                }
            })
        }

    }


    return (

        <div className="page">
            <div className="parent"></div>
            <div className="creator_login">
                <header className="img_creator_login"><img src={logo_Photopage} height="100px" width="500px" ></img></header>
                <main >
                    <article className="content">
                        {
                            (!isNew) ?
                                <section className='creator_login_section'>
                                    <input placeholder="User Name" onChange={e => setUserName(e.target.value)}></input> 
                                    <input placeholder="PassKey" onChange={e => setPassKey(e.target.value)} type='password'></input>
                                    <div className="content_footer">
                                        <button onClick={handleLogin}>Login</button>
                                        <button onClick={(e) => setIsNew(true)}>Create new</button>
                                    </div>
                                </section>
                                :
                                <section className="creator_login_section_2">
                                    <div className="creator_login_section_2_gaps">
                                        <input placeholder="First Name" type='text' onChange={e => setFirstName(e.target.value)}></input>
                                        <input placeholder="Last Name" type='text' onChange={e => setLastName(e.target.value)}></input>
                                    </div>
                                    <div className="creator_login_section_2_gaps">
                                        <input placeholder="Phone Number" type='tel' onChange={e => setPhoneNumber(e.target.value)}></input>
                                        <input placeholder="Aadhar Number" type='tel' onChange={e => setAadharNumber(e.target.value)}></input>
                                    </div>
                                    <div className="creator_login_section_2_gaps">
                                        <input placeholder="UserName" onChange={e => setGenerateUserName(e.target.value)}></input>
                                        <input placeholder="Passkey" onChange={e => setGeneratePassKey(e.target.value)}></input>
                                    </div>

                                    <div className="checkbox_section_2">
                                        <span>
                                            <label style={{ color: 'white' }}>Want to include your studio name?</label>
                                            <input type='checkbox' checked={isChecked} onChange={checkHandler}></input>
                                        </span>
                                        <div>{isChecked ? <div className="studioname"><input placeholder="Studio Name"  onChange={e => setStudioName(e.target.value)}></input></div> : ''}</div>
                                    </div >
                                    <div className="dob">
                                    <label className="dob_label">D.O.B : </label>
                                    <input type='date' onChange={e => setDateOfBirth(e.target.value)}></input>
                                    </div>
                                    <div className="content_footer">
                                        <button onClick={handleSaveDetails}>Save</button>
                                        <button onClick={(e) => setIsNew(false)}>Back</button>
                                    </div>  
                                </section>
                        }
                    </article>
                </main>
                <footer></footer>
            </div>
        </div>
    )
}

export default Creator_login