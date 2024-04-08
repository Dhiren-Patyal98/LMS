import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import bg from '../assets/background1.jpg';
import img from '../assets/course.jpg';
import img1 from '../assets/python1.jpg'
// import axios from 'axios'
// import { useEffect } from 'react'
import style from '../css/dashboard.module.css';
import { FaStar } from 'react-icons/fa';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../css/rating.css';


export default function DashboardPage() {
  // const [courses, setCourses] = useState([]);
  // useEffect(()=>
  // {
  //   axios.get('http://localhost:3002/courses')
  //   .then((res)=>
  //   {
  //     setCourses(res.data)

  //   })
  //   .catch((error)=>
  //   {
  //     console.log('error fetching',error)
  //   })
  // })
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [ratings, setRatings] = useState({});

  const handleRating = (courseTitle, rate) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [courseTitle]: rate
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const courses = [
    { title: "Learn Python", image: img1, link: "/calling" },
    { title: "Python Pro", image: img1, link: "/" },
    { title: "Learn Java", image: img1, link: "/calling" },
    { title: "Java Pro", image: img1, link: "/" },
    { title: "Learn CSS and HTML", image: img1, link: "/" },
  ];

  const Explorecourses = [
    { title: "Language Course", image: img, link: "/" },
    { title: "IT Course", image: img, link: "/" },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav className='bg-purple-900 px-4 py-3 flex justify-between' >
        <div className='flex items-center text-xl'>
          <span className='text-white font-semibold'>Select Your Course</span>
        </div>
        <div className='flex items-center gap-x-5'>
          {/* Search bar */}
          <div className='relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <button className='p-1 focus:outline-none text-black'>
                <FaSearch />
              </button>
            </span>
            <input
              type='text'
              className='w-full px-5 py-1 pl-12 rounded shadow outline-none md:block bg-white text-black'
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          {/* User profile */}
          <div className='flex items-center gap-x-5'>
            <div className='relative'>
              <button className='text-white group'>
                <FaUserCircle className='w-6 h-6 mt-1' />
                <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                  <ul className='py-2 text-sm text-gray-950'>
                    <li className='mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2' style={{ margin: "10px" }}>
                      <Row>
                        <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><CgProfile /></Col>
                        <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}>Profile</Col></Row>
                    </li>

                    <li className='mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2' style={{ margin: "10px" }}>

                      <Row>
                        <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><FiSettings /></Col>
                        <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}>Setting</Col></Row>
                    </li>
                    <span onClick={() => {
                      navigate("/");

                    }}>
                      <li className='mb-2 rounded hover:shadow hover:bg-gray-200  py-1 px-2' style={{ margin: "10px" }}>


                        <Row>
                          <Col xs={4} style={{ marginTop: "3.5px", paddingleft: "30px" }}><FiLogOut /></Col>
                          <Col xs={8} style={{ padding: "0", paddingRight: "75px" }}><span onClick={() => navigate('/login')}>Logout</span></Col></Row>
                      </li>
                    </span>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* background Image */}
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: '964px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: "100%", position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
            <h1 className={style.heading} style={{ position: 'relative' }}>Start Learning</h1>
            <hr style={{ marginTop: "13px", marginBottom: "5px" }} />
            {searchTerm === '' && (
              <>
                <h3 style={{ position: 'relative', marginLeft: "22px", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "30px", marginBottom: "10px" }}>Explore our Courses</h3>
                <Row>
                  {Explorecourses.map((course, index) => (
                    <Col key={index} xs="4">
                      <div className={`card ${style.card}`}>
                        <div className="card-body">
                          <Row>
                            <Col xs="7">
                              <Link to={course.link}>
                                <img className={`card-img-top ${style.image1}`} src={course.image} alt="..." />
                              </Link>
                            </Col>
                            <Col xs="5">
                              <Link to={course.link}>
                                <h5 style={{ marginTop: "70px", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "21px" }} className="card-title">{course.title}</h5>
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <hr style={{ marginTop: "40px", marginBottom: "5px" }}></hr>
                <h3 style={{ position: 'relative', marginLeft: "22px", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "30px", }}>Active Courses</h3>
                <Row style={{ marginBottom: "10px", marginTop: "10px" }}>
                  {filteredCourses.map((course, index) => {
                    if (Explorecourses.find(exploreCourse => exploreCourse.title.toLowerCase() === course.title.toLowerCase())) {
                      return null;
                    }
                    return (
                      <Col key={index} xs="4">
                        <div className="card" style={{ width: "30rem", marginLeft: "1rem", marginBottom: "10px", marginTop: "10px" }}>
                          <div className="card-body">
                            <Row>
                              <Link to={course.link}>
                                <img className={`card-img-top ${style.image}`} src={course.image} alt="..." />
                              </Link>
                            </Row>
                            <Row>
                              <Col>
                                <Link to={course.link}><p className={`card-text ${style.text}`} >{course.title}</p></Link>
                              </Col>
                              <Col>
                                <div className="rating-container">
                                  <div className="rating-stars">
                                    {[...Array(5)].map((_, index) => (
                                      <FaStar
                                        key={index}
                                        color={ratings[course.title] > index ? 'gold' : 'gray'}
                                        size={20}
                                        onClick={() => handleRating(course.title, index + 1)}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </>
            )}

            {searchTerm !== '' && (
              <>
                <h3 style={{ position: 'relative', marginLeft: "22px", fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "30px", }}>Search Results</h3>
                <Row style={{ marginBottom: "10px", marginTop: "10px" }}>
                  {filteredCourses.map((course, index) => (
                    <Col key={index} xs="4">
                      <div className="card" style={{ width: "30rem", marginLeft: "1rem", marginBottom: "10px", marginTop: "10px" }}>
                        <div className="card-body">
                          <Row>
                            <Link to={course.link}>
                              <img className={`card-img-top ${style.image}`} src={course.image} alt="..." />
                            </Link>
                          </Row>
                          <Row>
                            <Link to={course.link}><p className={`card-text ${style.text}`} >{course.title}</p></Link>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
