
import { Row, Col, Container } from 'react-bootstrap'
import style from '../css/coursedetail.module.css'
import image from '../assets/pyton.png'

export default function CourseDetails() {
    return (
        <>
        <div className='card' style={{marginTop:"20px", maxWidth:"155vh" , marginLeft:"28px", marginBottom:"20px"}}>
            
            <div className='card-body'>
                <Container className={style.container}>
                    <Row>
                        <Col>

                            <h3 style={{ fontFamily: "monospace", fontWeight: "bolder", fontSize: '29px', marginTop: "20px" }}>Learn Python® – the fastest growing programming language in the world</h3>
                            <p style={{ fontFamily: "inherit", fontWeight: "revert-layer" }}>Python is the programming language that opens more doors than any other, and the more you understand Python, the more you can do in the 21st Century. With a solid knowledge of Python, you can work in a multitude of jobs and a multitude of industries.

                                Software Engineer, Software Developer, Machine Learning Engineer, AI Engineer, DevOps Engineer, Full Stack Developer, Data Scientist, Project Manager, Systems Administrator, Security Engineer, Tester... The jobs that involve Python are varied and interesting. And there are many of them.</p>
                        </Col>
                    </Row>
                    <br></br>


                    <Row>
                        <Col xs={5}>
                            <p style={{ fontFamily: "inherit", fontWeight: "revert-layer" }}>The choices you make every day shape your reality and determine who you are, but your life-changing decisions determine who you become. Here at OpenEDG, we believe in the value of education and certification, and in the power of life-changing decisions.

                                Follow one of the OpenEDG Python Institute professional development programs, learn, certify your skills to kickstart your career as a developer, and achieve the ultimate goal – landing your dream job.

                                Complete the course and get an education that will equip you with the skills and knowledge you need in order to succeed in your chosen career. Pass the exam and obtain industry certification, and you will be in possession of the right tools to get the job you want. The right industry-recognized certification opens the right doors, and allows you to take full advantage of all the opportunities you find on the other side.</p>
                        </Col>
                        <Col xs={7}>
                            <img src={image} alt="" />
                        </Col>
                    </Row>




                </Container>


            </div>
            </div>
        </>
    )
}
