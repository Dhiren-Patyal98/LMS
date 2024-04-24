
import { BsBellFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaBars } from 'react-icons/fa6';
import Ppt from '../SideBarOptions/Ppt';
import CourseVideos from '../SideBarOptions/CourseVideos';
import Pdf from '../SideBarOptions/Pdf';
import { Container } from 'react-bootstrap';
import CourseDetails from '../SideBarOptions/CourseDetails';
import Assignment from '../SideBarOptions/Assignment';
import Quiz from '../SideBarOptions/Quiz'


const Navbar = ({ sidebarToggle, setsidebarToggle, clicked, detail, assignment, video, ppt,quiz }) => {
    let content;
    if (clicked) {
        content = (
            <Container style={{ backgroundColor: 'white', marginTop: '20px', marginBottom: '20px' }}>
                <Pdf />
            </Container>
        );
    } else if (detail) {
        content = <CourseDetails />;
    } else if (video) {
        content = <CourseVideos />
    } else if (assignment) {
        content = <Assignment />
        
    }
    else if (ppt) {
        content = <Ppt />
        
    }
    else if(quiz) {
        content = <Quiz/>
        
    }
    else
    {
        content = <CourseDetails />
    }
    
    const navigate = useNavigate();

    return (
        <>
            <nav className='bg-purple-900 px-4 py-3 flex justify-between'>
                <div className='flex items-center text-xl'>
                    <FaBars className='text-white me-4 cursor-pointer' onClick={() => {
                        setsidebarToggle(!sidebarToggle);
                    }} />
                    <span className='text-white font-semibold'>Dashboard</span>
                </div>
                <div style={{marginLeft:"125vh"}}>
                    <div className='relative'>
                        <button className='text-white group'>
                        <BsBellFill className='w-6 h-6 mt-1' ></BsBellFill>
                        </button>
                        </div>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div className='relative'>
                        <button className='text-white group'>
                            <FaUserCircle className='w-6 h-6 mt-1' />
                            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                                <ul className='py-2 text-sm text-gray-950'>
                                    <li className='mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2' style={{ margin: "10px" }}>
                                        <span onClick={() => {
                                            navigate("");

                                        }}>
                                            <Row>
                                                
                                                <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><CgProfile /></Col>
                                                <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}>Profile</Col>
                                            </Row>
                                        </span>
                                    </li>
                                    <li className='mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2' style={{ margin: "10px" }}>
                                        <span onClick={() => {
                                            navigate("");

                                        }}>
                                            <Row>
                                                <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><FiSettings /></Col>
                                                <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}>Setting</Col>
                                            </Row>
                                        </span>
                                    </li>
                                    <li className='mb-2 rounded hover:shadow hover:bg-gray-200  py-1 px-2' style={{ margin: "10px" }}>
                                        <span onClick={() => {
                                            navigate("/login");

                                        }}>
                                            <Row>
                                                <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><FiLogOut /></Col>
                                                <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}>Logout</Col>
                                            </Row>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {clicked ?
                <Container style={{ backgroundColor: 'white', marginTop: '20px', marginBottom: '20px' }}>
                    <Pdf />
                </Container>
                :
                content
            }
        </>
    );
};

// Define prop types
Navbar.propTypes = {
    sidebarToggle: PropTypes.bool.isRequired,
    setsidebarToggle: PropTypes.func.isRequired,
    clicked: PropTypes.bool.isRequired,
    detail: PropTypes.bool.isRequired,
    video: PropTypes.bool.isRequired,
    assignment: PropTypes.bool.isRequired,
    ppt: PropTypes.bool.isRequired,
    quiz: PropTypes.bool.isRequired,
};

export default Navbar;
