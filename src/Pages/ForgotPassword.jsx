/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import style from '../css/login.module.css'
import image from '../assets/Login.png'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import bg from '../assets/background1.jpg'


export default function ForgotPassword() {

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
        email: "",

    })


    const [error, seterror] = useState({ email: "" })


    const [buttonStatus, setbuttonStatus] = useState(false);


    const validationSchema = Yup.object(
        {
            email: Yup.string()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invaild email format")
                .required("Please enter email")

        })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false })
            seterror({ email: '' })
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
            <div style={styles}>
                <div style={backgroundOverlay}></div>

                <Container className={style.card}>
                    <div className={`card ${style.ccard}`}>

                        <h2 className={style.heading}>
                            Request reset link

                        </h2>


                        <div className={`card-body ${style.cardbody}`}>



                            <Row>
                                <Col style={{ marginBottom: "6vh", }}><img className={style.img} src={image} /> </Col>
                                <Col >
                                    <form style={{ marginLeft: "20px", marginTop: "5vh" }} onSubmit={handleSubmit}>

                                        <div
                                            style={{ marginBottom: "10px", marginTop: "25px" }} className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" value={formData.email} name='email' onChange={handleChange} />

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




                                        <span onClick={() => {
                                            navigate("/login")
                                        }} className={style.p} >Already have account login here </span>

                                        <div className={style.button}>




                                            <button type='submit' onClick={() => {
                                                if (buttonStatus === true) {
                                                    navigate("/resetpassword")
                                                }

                                            }}  style={{
                                                ...buttonStyle,
                                                backgroundColor: isHovered ? '#6f42c1' : '#581c87',
                                                borderColor: isHovered ? '#6f42c1' : 'white'
                                              }}
                                              onMouseEnter={handleHover}
                                              onMouseLeave={handleMouseLeave}
                                              className="btn" size="lg">Continue</button>





                                        </div>
                                    </form>
                                </Col>


                            </Row>
                        </div>
                    </div>


                </Container>
            </div>
        </div>
    )
}
