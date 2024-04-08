/* eslint-disable react/no-unescaped-entities */


import logo from '../assets/CodeEdu.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from'../css/homepage.module.css'
export default function HomePage() {
    const Navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const[login,setlogin] = useState(false);
    const[signup,setsignup] = useState(false);
    const buttonStyle = {
      backgroundColor: 'purple',
      color: 'white',
      borderColor: 'white',
      width: '18vh',
      transition: 'background-color 0.3s, border-color 0.3s'
    };

    const buttonStyle1 = {
        backgroundColor: 'purple',
        color: 'white',
        borderColor: 'black',
        width: '18vh',
        transition: 'background-color 0.3s, border-color 0.3s'
      };
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleHover1 = () => {
        setlogin(true);
      };
    
      const handleMouseLeave1 = () => {
          setlogin(false);
      };
      const handleHover2 = () => {
        setsignup(true);
      };
    
      const handleMouseLeave2 = () => {
          setsignup(false);
      };
  return (
    <div>
        <nav className='bg-white-700 px-4 py-4 flex justify-between'>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" >
        <div className='flex items-center text-xl'>

         <img className={style.logo}src={logo} alt=''/><span className=' font-semibold' style={{ fontSize:"32px", fontWeight:"bolder" ,transform: "translateX(-25%)" }}>Code</span><span style={{color:"#77368a", fontSize:"32px" ,fontWeight:"bold",transform: "translateX(-35%)"}}>Edu</span>
        </div>
        </div>

        <div className='flex items-center gap-x-5'>
          {/* Search bar */}
          <div className='relative'>
          <button
        onClick={()=>
        {
            Navigate('/registration')
        }}
      type="button"
      style={{
        ...buttonStyle1,
        backgroundColor: signup ? '#6f42c1' : '#581c87',
        borderColor: signup ? '#6f42c1' : 'white'
      }}
      onMouseEnter={handleHover2}
      onMouseLeave={handleMouseLeave2}
      className="btn"
    >
      Sign up
    </button>
            </div>
          {/* User profile */}
          <div className='flex items-center gap-x-5'>
            <div className='relative'>
            <button
        onClick={()=>
        {
            Navigate('/login')
        }}
      type="button"
      style={{
        ...buttonStyle1,
        backgroundColor: login ? '#6f42c1' : '#581c87',
        borderColor: login ? '#6f42c1' : 'white'
      }}
      onMouseEnter={handleHover1}
      onMouseLeave={handleMouseLeave1}
      className="btn"
    >
      Log in
    </button>
            </div>
          </div>
        </div>
      </nav>

      

        <div >
      <div className={style.image} >
      <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" data-aos-anchor-placement="top-center">
        <div style={{fontSize:"47px",paddingTop:"7vh" ,paddingLeft:"5vh"}}>
       <span style={{color:"#581c87", }}>L</span><span style={{color:"black"}}>everage,</span> <span style={{color:"#581c87" }}>M</span ><span style={{color:"black"}}>aster,</span><span style={{color:"#581c87" }}> S</span><span style={{color:"black"}}>ucceed
        <br></br>
         Explore Our <span style={{color:"#581c87", }}>CodeEdu's</span> Learning 
         <br></br>
         Platform!</span>
        
         </div>
         <div  style={{fontSize:"19.7px",paddingTop:"2vh" ,paddingLeft:"5vh", color:"black"}}>
         <p >Welcome to our innovative online learning platform, where knowledge knows</p>
         <p>  no bounds. Explore a dynamic space designed to empower and inspire</p>
         <p> learners of all backgrounds. Join us on a journey of discovery, growth, and</p>
         <p>achievement,as we pave the way for a brighter future together!</p>
        </div>
        <div style={{paddingTop:"4vh", paddingLeft:"5vh"}}>
        <button
        onClick={()=>
        {
            Navigate('/login')
        }}
      type="button"
      style={{
        ...buttonStyle,
        backgroundColor: isHovered ? '#6f42c1' : '#581c87',
        borderColor: isHovered ? '#6f42c1' : 'white'
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="btn"
    >
      Get Started
    </button>



        </div>
        </div>
        </div>
     
       </div>
    </div>
  )
}
