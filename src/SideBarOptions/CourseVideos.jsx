import { useEffect, useState } from 'react';
import style from '../css/video.module.css'
import PropTypes from 'prop-types';
import axios from 'axios';
// import vid from '../assets/istockphoto-1226413184-640_adpp_is.mp4'
export default function CourseVideos({setprogressbar ,progressbar, courseid}) {
    const [isHovered, setIsHovered] = useState(false);

    const [link, setlink] = useState("");

    const id = courseid;
     console.log(link);
  
    const getBackend = async (id)=>
      {
        console.log(id);
        try{
            const response = await axios.get(`http://localhost:4000/api/data/${id}`)
            console.log(response);
            setlink(response.data.videoLink)
        }
        catch(error)
        {
          console.log(error);
        }
        
      
      }
      useEffect(()=>{
        getBackend(id);
      },[id])


    const [buttonClicked, setButtonClicked] = useState(false);
 
  const handleClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      setprogressbar(prevProgressbar => prevProgressbar + 1);
      console.log(progressbar)
    }
  };

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
 return (
        <>

            <div className={style.vid}>
                <h1 className={style.heading}>Course Video</h1>
                <video style={{ borderRadius: "5%" }} width="80%" height="100vh" controls autoPlay="true">
                    <source src={link} type="video/mp4" />
                </video>

            </div>
            <button type='submit' size="lg"

style={{
  ...buttonStyle,
  backgroundColor: isHovered ? '#6f42c1' : '#581c87',
  borderColor: isHovered ? '#6f42c1' : 'white',
  marginLeft:"90%",
  marginBottom:"5%"
}}
onMouseEnter={handleHover}
onMouseLeave={handleMouseLeave}
className="btn"

onClick={handleClick}
// disabled={buttonStatus}

>Done</button>
        </>
    )
}
CourseVideos.propTypes = {
  progressbar:PropTypes.func.isRequired,
  setprogressbar:PropTypes.func.isRequired,
};