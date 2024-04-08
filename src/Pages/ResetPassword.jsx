
import { Container, Col, Row } from 'react-bootstrap'
import style from '../css/login.module.css'
import image from '../assets/Login.png'
import { useNavigate } from 'react-router-dom';

import bg from '../assets/background1.jpg'
import { useState } from 'react';
import * as Yup from 'yup';

export default function ResetPassword() {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const buttonStyle = {
        backgroundColor: 'purple',
        color: 'white',
        borderColor: 'white',
        width: '12vh',
        transition: 'background-color 0.3s, border-color 0.3s'
      };
    const [pass, setpass] = useState("password");

    const [iconColor, seticonColor] = useState("currentColor")
    const handlleClick = () => {
        seticonColor(iconColor === "currentColor" ? "Darkblue" : "currentColor");
        setpass(pass === "password" ? "text" : "password")
    }

    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',

    };
    const backgroundOverlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.97)', // Adjust the opacity value here

    };



    const [formData, setformData] = useState({

        password: "",
        confirmpassword: ""

    })


    const [error, seterror] = useState({ password: "", confirmpassword: "" })


    const [buttonStatus, setbuttonStatus] = useState(false);


    const validationSchema = Yup.object(
        {


            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain atleast one symbol")
                .matches(/[0-9]/, "Password must contain one number")
                .required("Please enter password"),

            confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
                .required("Please re-enter password")



        })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false })
            seterror({ password: '', confirmpassword: '' })
            setbuttonStatus(true)

        }
        catch (errors) {
            const newerror = {}

            errors.inner.forEach((err) => {
                newerror[err.path] = err.message;
            })
            seterror(newerror);
        }


    }



    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div style={styles}>
                    <div style={backgroundOverlay}></div>

                    <Container className={style.card}>
                        <div className={`card ${style.ccard}`}>

                            <h2 className={style.heading}>

                                Reset Password

                            </h2>


                            <div className={`card-body ${style.cardbody}`}>




                                <Row>
                                    <Col style={{ marginBottom: "6vh", }}><img className={style.img} src={image} /> </Col>
                                    <Col >
                                        <form style={{ marginLeft: "20px", marginTop: "5vh" }} onSubmit={handleSubmit}>

                                            <div
                                                style={{ marginBottom: "20px", marginTop: "20px" }}
                                                className="form-floating">

                                                <input type="text" className="form-control" id="floatingInput" name='password' value={formData.password} onChange={handleChange} />
                                                <label htmlFor="floatingInput">
                                                    <Row>

                                                        <Col xs={1} style={{ marginTop: "4px", padding: "0", paddingLeft: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                                        </svg></Col><Col xs={11} style={{ marginBottom: "10px", padding: "0", paddingLeft: "15px" }}> Enter New Password</Col>
                                                    </Row>


                                                </label>
                                                {error.password && <div className={style.alert}  >{error.password}</div>}

                                            </div>

                                            <div
                                                style={{ marginBottom: "20px", marginTop: "20px" }}
                                                className="form-floating">

                                                <input type={pass} className="form-control" id="floatingInput" name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} />
                                                <label htmlFor="floatingInput">
                                                    <Row>

                                                        <Col xs={1} style={{ marginTop: "4px", padding: "0", paddingLeft: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                                        </svg></Col><Col xs={11} style={{ marginBottom: "10px", padding: "0", paddingLeft: "15px" }}> Confirm New Password</Col>
                                                    </Row>


                                                </label>
                                                <svg onClick={() => {
                                                    handlleClick();

                                                }} style={{ cursor: "pointer", marginLeft: "52vh", transform: "translateY(-200%)", opacity: "80%" }} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill={iconColor} className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                                </svg>
                                                {error.confirmpassword && <div className={style.alert} style={{ transform: "translateY(-80%)" }}>{error.confirmpassword}</div>}
                                            </div>



                                            <div style={{ transform: "translateY(-100%)" }}>
                                                <span onClick={() => {
                                                    navigate("/login")
                                                }} className={style.p} >Already have account login here </span>
                                            </div>
                                            <div className={style.button}>




                                                <button type="submit" onClick={() => {
                                                    if (buttonStatus === true) {

                                                        navigate("/login")
                                                    }
                                                }} style={{
                                                    ...buttonStyle,
                                                    backgroundColor: isHovered ? '#6f42c1' : '#581c87',
                                                    borderColor: isHovered ? '#6f42c1' : 'white'
                                                  }}
                                                  onMouseEnter={handleHover}
                                                  onMouseLeave={handleMouseLeave}
                                                  className="btn" size="lg">Enter</button>





                                            </div>
                                        </form>
                                    </Col>

                                </Row>
                            </div>
                        </div>


                    </Container>
                </div>
            </div>
        </div>
    )
}
