import { useState } from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import style from '../css/register.module.css'
import image from '../assets/Login.png'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import bg from '../assets/background1.jpg'

export default function RegistrationPage() {
    const buttonStyle = {
        backgroundColor: 'purple',
        color: 'white',
        borderColor: 'white',
        width: '12vh',
        transition: 'background-color 0.3s, border-color 0.3s'
      };
      const [isHovered, setIsHovered] = useState(false);

      const handleHover = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
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
        backgroundColor: 'rgba(255, 255, 255, 0.97)',

    };

    const [formData, setformData] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })


    const [error, seterror] = useState({ email: "", password: "", confirmpassword: "" })


    const [buttonStatus, setbuttonStatus] = useState(false);


    const validationSchema = Yup.object(
        {
            email: Yup.string()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invaild email format")
                .required("Please enter email"),

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
            seterror({ email: '', password: '', confirmpassword: '' })
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

    const [buttonClick, setbuttonClick] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            <div style={styles}>
                <div style={backgroundOverlay}></div>
                {buttonClick ?

                    <Container className={style.card}>
                        <div className={`card ${style.ccard}`}>

                            <h2 className={style.heading}>

                                Create your account

                            </h2>


                            <div className={`card-body ${style.cardbody}`}>




                                <Row>
                                    <Col style={{ marginTop: "4vh" }}><img className={style.img1} src={image} /> </Col>
                                    <Col >
                                        <form style={{ marginLeft: "20px", marginTop: "5vh" }} onSubmit={handleSubmit}>


                                            <div
                                                style={{ marginBottom: "20px" }} className="form-floating">
                                                <input type="email" className="form-control" id="floatingInput" name='email' value={formData.email} onChange={handleChange} />
                                                <label htmlFor="floatingInput">
                                                    <Row>

                                                        <Col xs={2} style={{ marginTop: "3px", padding: "0", paddingLeft: "4px" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                                        </svg></Col>
                                                        <Col xs={10} style={{ padding: "0", paddingLeft: "10px" }}>Enter Email</Col>
                                                    </Row>



                                                </label>
                                                {error.email && <div className={style.alert} >{error.email}</div>}
                                            </div>

                                            <div
                                                style={{ marginBottom: "20px", marginTop: "20px" }}
                                                className="form-floating">

                                                <input type="text" className="form-control" id="floatingInput" name='password' value={formData.password} onChange={handleChange} />
                                                <label htmlFor="floatingInput">
                                                    <Row>

                                                        <Col xs={1} style={{ marginTop: "4px", padding: "0", paddingLeft: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                                        </svg></Col><Col xs={11} style={{ marginBottom: "10px", padding: "0", paddingLeft: "15px" }}> Enter Password</Col>
                                                    </Row>


                                                </label>
                                                {error.password && <div className={style.alert} >{error.password}</div>}

                                            </div>

                                            <div
                                                style={{ marginBottom: "20px", marginTop: "20px" }}
                                                className="form-floating">

                                                <input type={pass} className="form-control" id="floatingInput" name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} />
                                                <label htmlFor="floatingInput">
                                                    <Row>

                                                        <Col xs={1} style={{ marginTop: "4px", padding: "0", paddingLeft: "5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                                        </svg></Col><Col xs={11} style={{ marginBottom: "10px", padding: "0", paddingLeft: "15px" }}> Confirm Password</Col>
                                                    </Row>


                                                </label>
                                                <svg onClick={() => {
                                                    handlleClick();

                                                }} style={{ cursor: "pointer", marginLeft: "52vh", transform: "translateY(-200%)", opacity: "80%" }} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill={iconColor} className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                                </svg>
                                                {error.confirmpassword && <div className={style.alert} style={{ transform: "translateY(-80%)", }} >{error.confirmpassword}</div>}
                                            </div>

                                            <p onClick={() => {
                                                navigate("/login")
                                            }} className={style.p} style={{ transform: "translateY(-100%)" }} >   Already have account login here </p>

                                            <div className={style.button}>




                                                <button type='submit' onClick={() => {
                                                    if (buttonStatus === true) {
                                                        setbuttonClick(false)
                                                        setTimeout(() => {
                                                            navigate("/login")
                                                        }, 0);
                                                    }
                                                }

                                                }  style={{
                                                    ...buttonStyle,
                                                    backgroundColor: isHovered ? '#6f42c1' : '#581c87',
                                                    borderColor: isHovered ? '#6f42c1' : 'white'
                                                  }}
                                                  onMouseEnter={handleHover}
                                                  onMouseLeave={handleMouseLeave}
                                                  className="btn"size="lg">Register</button>





                                            </div>
                                        </form>
                                    </Col>


                                </Row>
                            </div>
                        </div>

                    </Container>

                    : () => { navigate("/loading") }

                }</div>
        </>

    )
}




