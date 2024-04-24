/* eslint-disable react/no-unescaped-entities */


import logo from '../assets/CodeEdu.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from'../css/homepage.module.css'
export default function Aboutus() {
    const Navigate = useNavigate();
  
    const[contactus,setcontactus] = useState(false);
  
   

    const buttonStyle1 = {
        backgroundColor: 'purple',
        color: 'white',
        borderColor: 'black',
        width: '18vh',
        transition: 'background-color 0.3s, border-color 0.3s'
      };
  


    const handleHover1 = () => {
        setcontactus(true);
      };
    
      const handleMouseLeave1 = () => {
          setcontactus(false);
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
        
            </div>
          {/* User profile */}
          <div className='flex items-center gap-x-5'>
            <div className='relative'>
      
            </div>
          </div>
        </div>
      </nav>

      

        <div >
      <div className={style.image} >
      <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" data-aos-anchor-placement="top-center">
        <div style={{fontSize:"47px",paddingTop:"7vh" ,paddingLeft:"5vh"}}>
       <span style={{color:"black"}}>Welcome to</span> <span style={{color:"#581c87" }}>CodeEdu</span><span style={{color:"black"}}>
        <br></br> where learning meets innovation
     
        
         
         </span>
        
         </div>
         <div  style={{fontSize:"19.7px",paddingTop:"2vh" ,paddingLeft:"5vh", color:"black"}}>
            
         <p >At CodeEdu, we believe in the transformative power of education.<p>
        </p> Our platform is designed to foster creativity, critical thinking, and lifelong learning.</p>
        <br></br>
         <p> With a commitment to excellence, CodeEdu provides a dynamic online </p>
         <p>environment where students can thrive and educators can inspire.</p>
         <br></br>
          <span >Whether you're a student embarking on your learning journey or an educator </span>
         <p>shaping the minds of tomorrow, CodeEdu is your partner in success.</p>
        </div>
       

        <div style={{paddingTop:"4vh", paddingLeft:"5vh"}}>
        <button
        onClick={()=>
        {
            Navigate('/')
        }}
      type="button"
      style={{
        ...buttonStyle1,
        backgroundColor: contactus ? '#6f42c1' : '#581c87',
        borderColor: contactus ? '#6f42c1' : 'white'
      }}
      onMouseEnter={handleHover1}
      onMouseLeave={handleMouseLeave1}
      className="btn"
    >
      Contact Us
    </button>



        </div>
        </div>
        </div>
     
       </div>
    </div>
  )
}
