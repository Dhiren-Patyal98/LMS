import { useState } from 'react';
import style from '../css/video.module.css'
import PropTypes from 'prop-types';
// import vid from '../assets/istockphoto-1226413184-640_adpp_is.mp4'
export default function CourseVideos({setprogressbar ,progressbar}) {
    const [isHovered, setIsHovered] = useState(false);

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
                    <source src="https://firebasestorage.googleapis.com/v0/b/codeedu-7fc91.appspot.com/o/Recording%202024-05-14%20231631.mp4?alt=media&token=0ae911f2-c2d5-42a0-afda-f1a00ee69ff6" type="video/mp4" />
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